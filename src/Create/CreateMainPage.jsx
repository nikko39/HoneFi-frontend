import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './CreatePage.css';
import Collections from "./Collections";
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
import PhaseOne from "./PhaseOne";
import NftToken from "./NftToken";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
const AnchorLinkConsoleTransport = require('anchor-link-console-transport')



function CreateMainPage(){
        const dispatch = useDispatch();
        const Login = useSelector(state => state)
        const [phase, setPhase] = useState({
            "phase": 1,
            "collection": "testtestmmmm"
        }
        )
        const [Collection, setCollection] = useState([])
        function collections() {
            if (Login.login) {
                fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections?author=' + Login.wallet + '&page=1&limit=100&order=desc&sort=created')
                .then(data => data.json())
                .then(data => setCollection(data.data))
            }
        }
        useEffect(() => {
            collections()
        },[])
        function changePhase(phase, collection) {
            setPhase({
                'phase': phase,
                'collection': collection
            })
        }
        return(
            <div style={{ 'width': '80%', 'margin': '0 auto'}}>
                <div style={{ 'display': 'flex'}}>
                    <div className="create_phase">
                        <p style={{ 'margin': '0px 0px 10px 0px'}}>Current phase</p>
                        <div className="roadmap_create">
                            <input className="check_roadmap" checked={true} type="checkbox" />
                            <input className="check_roadmap" checked={phase.phase >= 2 ? true : false} type="checkbox" />
                            <input className="check_roadmap" checked={phase.phase >= 3 ? true : false} type="checkbox" />
                            <input className="check_roadmap" checked={phase.phase >= 4 ? true : false} type="checkbox" />
                            <div className="line_roadmap"></div>
                        </div>
                    </div>
                    <div className="create_docs">
                        <p style={{ 'margin': '0px 0px 10px 0px'}}>Platform guide</p>
                        <a className="create_faqs" href="https://docs.honefi.app">Docs</a>
                        <a className="create_faqs" href="https://docs.honefi.app">FAQ</a>
                    </div>
                </div>
                <div className="choose_your_collection">
                        { phase.phase == 1 ? <PhaseOne changePhase={changePhase}/> : '' }
                        { phase.phase == 2 ? <NftToken collection={phase.collection} changePhase={changePhase}/> : '' }
                </div>
            </div>
        )   
    }


export default CreateMainPage;
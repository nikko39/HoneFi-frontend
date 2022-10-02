import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './CreatePage.css';
import Collections from "./Collections";
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
const AnchorLinkConsoleTransport = require('anchor-link-console-transport')



const PhaseOne = ({changePhase}) => {
        const identifier = 'example'
        const transport = new AnchorLinkBrowserTransport()
        const link = new AnchorLink({
            transport,
            chains: [{
                chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
                nodeUrl: 'https://waxtestnet.greymass.com',
            }]
        })
        let session;
        const [Collection, setCollection] = useState([])
        function restoreSession() {
            link.restoreSession(identifier).then((result) => {
                session = result
                if (session) {
                    fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections?author=' + String(session.auth.actor) + '&page=1&limit=100&order=desc&sort=created')
                    .then(data => data.json())
                    .then(data => setCollection(data.data))
                }
            })
        }
        useEffect(() => {
            restoreSession()
        },[])
        console.log(Collection)
        return(
            <>
                <h2>My collections</h2>
                <p>Select one of the previously created collections or create a new one</p>
                <div className="collections">
                    {Collection.map(post=>
                        <Collections changePhase={changePhase} post={post}/>
                    )}
                </div>
                    {Collection === false ? <img src="https://ipfs.hivebp.io/thumbnail?hash=QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M" alt="" /> : ''}
            </>
        )   
    }


export default PhaseOne;
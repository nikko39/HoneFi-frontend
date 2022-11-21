import React, {useState} from "react";
import Upcommig from './Upcomming.jsx';
import LiveDrops from "./LiveDrops.jsx";
import {Component, useEffect} from 'react';
import { GetTokenDrops } from "../api/api.js";
import DropChoose from "./DropChoose.jsx";


const TokensPage = () => { 
    const[upcommings, setUpcommings] = useState([]);
    const[filter, SetFilter] = useState('balancer')
    const[Active, SetActive] = useState(false)
    function ChangeFilter(filter){
        SetFilter(filter)
    }
    function ChangeActive(bool){
        SetActive(bool)
    }
    useEffect(() => {
        GetTokenDrops().then(data => setUpcommings(data))
    }, []);
    return(
        <div>
            <h1 className="drops_h1">Tokensale</h1>
            <div className="drops_back">
                <DropChoose ChangeFilter={ChangeFilter} ChangeActive={ChangeActive} props={Active} />
                <div className="drops_page">
                    { Active == false ? <div className="upcomming_drops">
                        <div className="drops">
                            {upcommings.map(post=>
                                <Upcommig post={post} filter={filter}/>
                            )}
                        </div>
                    </div> : ''}
                    { Active == true ? <div className="live_drops">
                        <div className="drops">
                            {upcommings.map(post=>
                                <LiveDrops post={post} filter={filter}/>
                            )} 
                        </div>
                    </div> : ''}
                    <div style={{'width': '100%', 'textAlign': 'center', 'marginTop': '20px'}}>
                        {upcommings.length > 10 ? <button className="load_more">... Load more</button> : ''}
                    </div>
                </div>
            </div>
        </div>
    )

}


export default TokensPage;
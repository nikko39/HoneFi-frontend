import React, {useState} from "react";
import Upcommig from './Upcomming.jsx';
import LiveDrops from "./LiveDrops.jsx";
import {Component, useEffect} from 'react';
import {chainFetch} from "../api/api.js";
import DropChoose from "./DropChoose.jsx";


const DropsPage = () => { 
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
        chainFetch.GetDrops().then(data => setUpcommings(data.sort(function(a,b) { return a.dropstart - b.dropstart})))
    }, []);
    async function sorted(value){
        console.log(value)
        if ( value == 'Create'){
            setUpcommings([])
            let test = await upcommings.sort(function(a,b) { return b.dropnum - a.dropnum})
            setUpcommings(test)
        }
        else if ( value == 'Start'){
            setUpcommings([])
            let test = await upcommings.sort(function(a,b) { return a.dropstart - b.dropstart})
            console.log(test)
            setUpcommings(test)
        }
        else if ( value == 'Price') {
            setUpcommings([])
            let test = await upcommings.sort(function(a,b) { return parseInt(a.price) - parseInt(b.price)})
            console.log(test)
            setUpcommings(test)
        }
    }
    return(
        <div>
            <h1 className="drops_h1">Drops</h1>
            <div className="drops_back">
                <DropChoose ChangeFilter={ChangeFilter} sorted={sorted} ChangeActive={ChangeActive} props={Active} />
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
                        <button className="load_more">... Load more</button>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default DropsPage;
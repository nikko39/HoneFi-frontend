import React,{useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import DropsInfo from "./DropsInfo";
import Supply from "./Supply.jsx";
import DropsGraphic from "./DropsGraphic";
import CollectionInfo from "./CollectionInfo";

const TokenDropPage = () => {
    let id = parseInt(useParams().id);
    const [resp, setResp] = useState(0)
    async function dr(id) {
        fetch('https://testnet.waxsweden.org/v1/chain/get_table_rows', {
            method: 'post',
                body: JSON.stringify({"json":true,"code":"balancertest","scope":"balancertest","table": "tokendrops","lower_bound":id,"upper_bound":id,"index_position":1,"key_type":"","limit":99999,"reverse":false,"show_payer":false}),
                headers: {
                'content-type': 'application/json'
                }
        })
        .then(data => data.json())
        .then (data => 
            setResp(data))
    }
    console.log(resp)
    useEffect(() => {
        dr(id)
    }, []);
        if (resp == 0) {
            return
        }
        return(
            <div>
                <h1 className="drops_h1">Tokensale</h1>
                <div className="DropPage">
                    <DropsInfo post={resp.rows[0]}/>
                    <Supply post={resp.rows[0]}/>
                    <DropsGraphic data={resp.rows[0]}/>
                    <CollectionInfo/>
                </div>
            </div>
        )
    
}

export default TokenDropPage;
import React,{useState, useEffect} from "react";
import '../../index.css';
import './style.css'
import {useParams} from 'react-router-dom';
import * as waxjs from "@waxio/waxjs/dist";
import { buy_waxjs } from "../../wax/waxjs";
import supplyimg from '../../img/vector_supply.png';
import settingimg from '../../img/setting.png';
import wax_img from '../../img/wax.png';
import percent_img from '../../img/percent.png';
import AnchorLink from 'anchor-link';
import {GetLogo} from '../../api/api.jsx'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
const AnchorLinkConsoleTransport = require('anchor-link-console-transport');



const DropsInfo = (props) => {
    const [info, setInfo] = useState('QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M')
    const [Template, setTemplate] = useState('')
    let session
    let id = useParams().id;
    const [Quaniti, setQuaniti] = useState(1);
    const [Login, setLogin] = useState({
        'login': false,
        'wallet': false
    })
    //timer
    const date = parseInt(new Date().getTime()/1000);
    let dropstart = props.post.dropstart - date;
    const [TimeLeft, setTimeLeft] = useState(dropstart);
    const hours = Math.floor(TimeLeft/60/60);
    const minutes = Math.floor(TimeLeft/60 - hours*60);
    const seconds = TimeLeft - hours*60*60 - minutes*60;

    const [Click, setClick] = useState(false);
    const [LoginButton, setLoginButton] = useState(false)
    function LoginChange(metod, wallet) {
        setLogin({
            'login': metod,
            'wallet': wallet
        })
    }
    useEffect(() => {
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections/' + props.post.collection)
        .then(resps => resps.json())
        .then(resps => { setInfo(resps.data.img) })
    }, []);
    // app identifier, should be set to the eosio contract account if applicable
    const identifier = 'example'
    // initialize the browser transport
    const transport = new AnchorLinkBrowserTransport()
    // initialize the link
    const link = new AnchorLink({
        transport,
        chains: [{
            chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
            nodeUrl: 'https://waxtestnet.greymass.com',
        }]
    })
    let slippage = 2.5;
    function buy() {
        link.restoreSession(identifier).then((result) => {
            session = result    
            const actions = [{
                    account: 'eosio.token',
                    name: 'transfer',
                    authorization: [session.auth],
                    data: {
                        from: session.auth.actor,
                        to: 'balancertest',
                        quantity: ((Quaniti*prices) + (Quaniti*prices)*(slippage/100)).toFixed(8) + ' WAX',
                        memo: 'deposit'
                    }
                },{
                    account: 'balancertest',
                    name: 'claimdrop',
                    authorization: [session.auth],
                    data: {
                        claimer: session.auth.actor,
                        drop_id: id,
                        claim_amount: Quaniti
                    }
                },{
                    account: 'balancertest',
                    name: 'claimbalance',
                    authorization: [session.auth],
                    data: {
                        username: session.auth.actor
                    }
                }
            ]
                session.transact({actions})
        })
    }
    let timeleft = Math.floor((parseInt(new Date().getTime()/1000) - parseFloat(props.post.lastbuy))/props.post.changepricetime);
    if ( timeleft < 0 ){ timeleft = 0 }
    let prices = parseFloat(props.post.price)*(1-parseInt(props.post.changeprice)/100)**timeleft;
    if ( prices < 0.1 ) { prices = 0.1 }
    const Price = prices.toFixed(2)
    function handleChange (event) {
        setQuaniti(event.target.value)
    }
    let pricepercent = parseInt((prices/parseInt(props.post.startprice)*100 - 100))
    return(
        <div className="drop_collection">
            <div style={{'display': 'flex', 'alignItems': 'center'}}>
                <img className="drop_page_coll_logo" src={"https://ipfs.hivebp.io/thumbnail?hash=" + info}/>
                
                <p>
                    {props.post.collection}<br/>
                    <span>{props.post.tokenticker} token</span>
                </p>
            </div>
            <div>
                <p className="info_header_opt">Current Price:</p>
                <p style={{'margin': 0}}>
                    {prices.toFixed(2)} WAX 
                    <span style={ 
                        (Math.sign(pricepercent) == 1) ? {'background': 'green'} :
                        (Math.sign(pricepercent) == -1) ? {'background': 'red'} :
                        (Math.sign(pricepercent) == 0) ? {'background': 'rgba(42, 40, 83, 1)'} : {'background': 'rgba(42, 40, 83, 1)'}} className="percent_change">
                        <img src={percent_img}/>
                        {' ' + pricepercent + '%'}
                    </span>
                </p>
            </div>
            <div className="buying_options">
                <p className="info_header_opt">
                    Buying options 
                    <button className="drop_collection_button"><img src={settingimg}/></button> 
                    <button className="drop_collection_button">?</button> 
                </p>
                <div className="drop_buy_input">
                    <div>
                        <p className="quanity_div"><img style={{ 'width': 20, 'margin': '0px 10px'}} src={supplyimg}/>{props.post.tokenticker}</p>
                        <p className="Available">Available: {props.post.maxsupply - props.post.supply}</p>
                    </div>
                    <div className="input_quaniti">
                        <input onChange={handleChange} value={Quaniti} className="quanity_input" type="text" />
                        <p><button className="quanity_button_usemax">use max</button></p>
                    </div>
                </div >
                <div className="drop_buy_input">
                    <div>
                        <p className="quanity_div"><img style={{ 'width': 20, 'margin': '0px 10px'}} src={wax_img}/> WAXP</p>
                        <p className="Available">Balance: 5</p>
                    </div>
                    <div className="input_quaniti">
                        <p style={{'width': 'auto'}} className="quanity_input">{Quaniti*Price}</p>
                    </div>
                </div>
            </div>
            <button disabled={TimeLeft > 0 ? true : false} className="buy_button" onClick={buy}>
                { TimeLeft > 0 ? (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) : 'Buy' }
                </button>
        </div>
    )
}

export default DropsInfo;
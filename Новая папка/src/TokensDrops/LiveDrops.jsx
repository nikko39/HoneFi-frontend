import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import supplyimg from '../img/vector_supply.png';
import fire from '../img/wl.png';
import discord from '../img/discord.png';
import twitter from '../img/twitter.png';
import website from '../img/website.png';
import telegram from '../img/telegram.png';


const LiveDrops = (props) =>{
    const [colLogo,setcolLogo] = useState('QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M')
    const date = parseInt(new Date().getTime()/1000);
    useEffect(() => {
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections/' + props.post.collection)
        .then(resps => resps.json())
        .then(resps => { 
            setcolLogo(resps.data.img)
        })
    }, []);
    if ( props.post.format != props.filter){
        return false
    }
    if (props.post.dropstart < date) {
        let img = "https://ipfs.hivebp.io/thumbnail?hash=" + props.post.img;
        let imglogo = "https://ipfs.hivebp.io/thumbnail?hash=" + colLogo;
        console.log(imglogo)
        let link = '/tokensale/' + props.post.dropnum;
        return(
            <Link to={link} className="drop_card">
            <div className="template_img">
                <p className="drop_timer"><span className="green_circle"></span>  Live</p>
                <img className="img_temp" src={img} />
                <img className="drop_card_logo" src={imglogo} alt="" />
            </div>
            <div>
            </div>
            <p className="droppage_collection_name">
                {props.post.collection} <img src={fire}/><br/>
                        <span style={{'fontWeight': 400, 'float': 'left'}}>{props.post.tokenticker} token</span>    
                    </p>
                    <div className="card_price">
                        <img src={supplyimg}/> {props.post.maxsupply > 100 ? (props.post.maxsupply/1000) + 'k' : props.post.maxsupply }
                        <p>{parseInt(props.post.price) + ' WAXP'}</p>
            </div>
        </Link>
        )
    }
}


export default LiveDrops;
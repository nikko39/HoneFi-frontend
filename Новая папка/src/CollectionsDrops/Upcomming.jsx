import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import supplyimg from '../img/vector_supply.png';
import fire from '../img/wl.png';
import discord from '../img/discord.png';
import twitter from '../img/twitter.png';
import website from '../img/website.png';
import telegram from '../img/telegram.png';


const Upcommig = (props) =>{
    const [colLogo,setcolLogo] = useState('QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M')
    const date = parseInt(new Date().getTime()/1000);
    let dropstart = props.post.dropstart - date;
    const [TimeLeft, setTimeLeft] = useState(dropstart);
    const hours = Math.floor(TimeLeft/60/60);
    const minutes = Math.floor(TimeLeft/60 - hours*60);
    const seconds = TimeLeft - hours*60*60 - minutes*60;
    useEffect(() => {
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates/' + props.post.collection + '/' + props.post.templates)
        .then(resps => resps.json())
        .then(resps => { 
            setcolLogo(resps.data.collection.img)
        })
        const interval = setInterval(() => {
            setTimeLeft((TimeLeft) => (TimeLeft - 1));
        }, 1000)
    }, []);
    if ( props.post.format != props.filter){
        return false
    }
    if ( TimeLeft <= 0 ){
        return false
    }
        if (props.post.dropstart > date) {
            let img = "https://ipfs.hivebp.io/thumbnail?hash=" + props.post.img;
            let imglogo = "https://ipfs.hivebp.io/thumbnail?hash=" + colLogo;
            let link = '/drop/' + props.post.dropnum;
            return(
                <Link to={link} className="drop_card">
                    <div className="template_img">
                        <p className="drop_timer"><span>{hours < 10 ? '0' +hours : hours}</span>:<span>{minutes < 10 ? '0' + minutes : minutes}</span>:<span>{seconds < 10 ? '0' + seconds : seconds}</span></p>
                        <img className="img_temp" src={img} />
                        <img className="drop_card_logo" src={imglogo} alt="" />
                    </div>
                    <div>
                    </div>
                    <p className="droppage_collection_name">{props.post.collection} <img src={fire}/></p>
                    <div className="drops_card_links">
                        <img src={discord}/>
                        <img src={telegram}/>
                        <img src={twitter}/>
                        <img src={website}/>
                    </div>
                    <div className="card_price">
                        <img src={supplyimg}/> {props.post.maxsupply}
                        <p>{parseInt(props.post.price) + '$'}</p>
                    </div>
                </Link>
            )
        }
}


export default Upcommig;
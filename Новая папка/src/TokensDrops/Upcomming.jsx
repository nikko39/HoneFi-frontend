import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import supplyimg from '../img/vector_supply.png';
import fire from '../img/wl.png';


const Upcommig = (props) =>{
    const [colLogo,setcolLogo] = useState('QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M')
    const date = parseInt(new Date().getTime()/1000);
    let dropstart = props.post.dropstart - date;
    const [TimeLeft, setTimeLeft] = useState(dropstart);
    const hours = Math.floor(TimeLeft/60/60);
    const minutes = Math.floor(TimeLeft/60 - hours*60);
    const seconds = TimeLeft - hours*60*60 - minutes*60;
    useEffect(() => {
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections/' + props.post.collection)
        .then(resps => resps.json())
        .then(resps => { 
            setcolLogo(resps.data.img)
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
            let link = '/tokensale/' + props.post.dropnum;
            return(
                <Link to={link} className="drop_card">
                    <div className="template_img">
                        <p className="drop_timer"><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></p>
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


export default Upcommig;
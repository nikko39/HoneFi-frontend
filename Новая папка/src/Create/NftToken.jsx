import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import './CreatePage.css';
import plus from '../img/plus.png';
import { Link } from "react-router-dom";

const NftToken = ({collection, changePhase}) => {
    let navigate = useNavigate();
    const [Img, setImg] = useState({
        'img': 'QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M',
        'authorized_accounts': [0]
        })
    useEffect(() => {
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections/' + collection)
        .then(data => data.json())
        .then(data => setImg(data.data))
    },[])
    let img = "https://ipfs.hivebp.io/thumbnail?hash=" + Img.img;
    function approve() {
        for ( let i = 0; i < Img.authorized_accounts.length; i++) {
            if ( Img.authorized_accounts[i] == 'balancertest'){
                return
            }
        }
        alert('Check approve')
    }
    return(
        <div>
            <h1>Create Drop</h1>

            <div className="flex_diddc">
                <div>
                    <div className="collection_card">
                        <img className="img_collection_create" src={img}/>
                        <p>{collection}</p>
                        <button className="create_nfttoken_button" onClick={() => {changePhase(1, false)}}>Back</button>
                    </div>
                </div>
                <div>
                    <div className="choose_buttons_">
                        <div className="collection_card">
                            <h2>NFT Drop</h2>
                            <button onClick={approve} className="create_nfttoken_button">
                                NFT Drop
                            </button>
                        </div>
                        <div style={{'alignItems': 'baseline'}} className="collection_card">
                            <h2>Token Drop</h2>
                            <button onClick={() => {changePhase(3, collection)}} className="create_nfttoken_button">
                                Token Drop
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NftToken;
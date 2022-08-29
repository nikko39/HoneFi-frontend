import React from "react";
import { Link } from "react-router-dom";
const Collections = ({ post ,changePhase }) =>{
    let img = "https://ipfs.hivebp.io/thumbnail?hash=" + post.img;
    return(
        <div className="collection_card">
            <img className="collection_img" src={img}/>
            <p>{post.collection_name}</p>
            <button className="create_nfttoken_button" onClick={() =>{changePhase(2,post.collection_name)}}>Choose</button>
        </div>
    )
}
export default Collections;
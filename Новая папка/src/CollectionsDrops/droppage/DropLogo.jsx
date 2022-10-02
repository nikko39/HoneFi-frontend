import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import '../../index.css';
import { GetTemplate } from "../../api/api";

const DropLogo = (props) => {
    let id = useParams().id
    const [info, setInfo] = useState("QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M");
    useEffect(() => {
        GetTemplate(id).then(data => setInfo(data))
    }, []);
    return(
        <div className="drop_logo">
            <img className="collection_drop_logo" src={"https://ipfs.hivebp.io/thumbnail?hash=" + info}/>
        </div>
    )
}

export default DropLogo;
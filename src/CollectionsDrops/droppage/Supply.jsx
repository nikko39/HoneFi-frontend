import React, {useState} from "react";
import '../../index.css';
import supplyimg from '../../img/vector_supply.png';

const Supply = (props) => {
    let supply = props.post.supply;
    let maxsupply = props.post.maxsupply;
    return(
        <div className="drop_supply">
            <img style={{ 'width': 25, 'margin': '0px 10px'}}src={supplyimg}/>{supply}/{maxsupply}
        </div>
    )
}

export default Supply;
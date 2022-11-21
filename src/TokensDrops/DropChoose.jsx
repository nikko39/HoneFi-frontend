import React, {useState} from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Input_wl from "../components/input_wl";

const DropChoose = ({ ChangeFilter,ChangeActive, props }) =>{
    let [Drop, setDrop] = useState('balancer')
    const All = (text) => {
        setDrop(text)
        ChangeFilter(text)
    }
    let balanceInfo = `This type is a combination of two types of auctions - Dutch and British -
    the key feature of which is that users/buyers determine the fair price for each individual
    sale. The price changes depending on current demand/activity, either positively or
    negatively. If there are no purchases for a predetermined time, the price decreases, and
    if there are active purchases for a short distance, the price increases. This allows to
    create an optimal balance for each user, at the same time cutting off any bots' activity.`;
    let datchInfo = `The creator of the auction sets an initial price, which decreases with a
    certain interval of time by predetermined %, so that the bidders themselves determine
    the necessary entry point. You can buy at the start of the auction, or you can wait for the
    price to drop to the desired point. This type of auction adds excitement and helps in
    determining a fair price.`;
    return(
        <div className="header_info">
            <input className="input_filter" type="text" placeholder="Search by name" />
            <p>Type:</p>
            <div style={{ 'position': 'relative'}}>
            <label className="switch">
                <input onChange={() => {Drop == 'balancer' ? All('dutch') : All('balancer')}} type="checkbox"/>
                <span className="slider round">
                    <span className="checkbox_flex">
                        <p className="z_ind">Balance</p>
                        <p className="z_ind">Dutch</p>
                    </span>
                </span>
            </label>
            <Tippy content={Drop == 'balancer' ? balanceInfo : datchInfo}><p className="what_is">?</p></Tippy>
            </div>
            <p>Status:</p>
                <button style={props ? { 'background': 'linear-gradient(to bottom left, #6159B7 ,#442361)'} : {}} onClick={() => {ChangeActive(true)}} className="button_filter">
                    <span style={{ 'display': 'flex', 'alignItems': 'center'}}>
                        <span style={{'width': '7px', 'height': '7px', 'background': 'green', 'borderRadius': '50%', "marginRight": '3px'}}/>
                        Active
                    </span>
                </button>
                <button style={props == false ? { 'background': 'linear-gradient(to bottom left, #6159B7 ,#442361)'} : {}} onClick={() => {ChangeActive(false)}} className="button_filter">
                    <span style={{ 'display': 'flex', 'alignItems': 'center'}}>
                        <span style={{'width': '7px', 'height': '7px', 'background': 'blue', 'borderRadius': '50%', "marginRight": '3px'}}/>
                        Upcoming
                    </span>
                </button>
            <p>Sort by:</p>
            <select className="select_filter">
                <option value="1">Create</option>
                <option value="2">Start</option>
                <option value="3">Price</option>
            </select>
            <p><Input_wl /> Only Whitelisted</p>
        </div>
    )
}


export default DropChoose;
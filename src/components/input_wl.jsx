import React from "react";
import './input_wl.css'


function Input_wl() {
    return(
        <>
            <label class="switch_wl">
                <input onClick={e => console.log(e.target.checked)} type="checkbox"/>
                <span class="slider_wl"></span>
            </label>
        </>
    )
}


export default Input_wl;
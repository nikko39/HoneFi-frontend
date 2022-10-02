import React, {useState} from "react";
import {Component, useEffect} from 'react';
import './launch.css'


const LaunchpadPage = () => { 
    return(
        <div className="launch_main">  
            <h1>Launchpad</h1>
            <p>There are no active projects at the moment</p>
            <p className="launch_buttons">
                <a href="" className="launch_submit_button">Submit Application</a>
                <a href="https://docs.honefi.app/" className="launch_ducomentation_button">Documentation</a>
            </p>
        </div>
    )

}


export default LaunchpadPage;
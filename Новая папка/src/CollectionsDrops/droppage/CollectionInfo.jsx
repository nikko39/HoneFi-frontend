import React from "react";
import '../../index.css';
import twitter_img from '../../img/twitter.png'
import discord_img from '../../img/discord.png'
import telegram_img from '../../img/telegram.png'
import github_img from '../../img/github.png'
import youtube_img from '../../img/youtube.png'
import hh_img from '../../img/hh.png'
import atomimc_img from '../../img/AtomicHub.png'
import nefty_img from '../../img/NeftyBlocks.png'

function CollectionInfo() {

    return(
        <div className="drop_collection_info_">
                <p style={{ 'display': 'flex', 'alignItems': 'center', 'flexWrap': 'wrap'}}>
                    <a style={{'margin': '0px 10px'}} href=""><img src={twitter_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={discord_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={telegram_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={github_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={youtube_img}/></a>
                    <a className="pppp" style={{'margin': '0px 10px'}}><img src={hh_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={atomimc_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={nefty_img}/></a>
                </p>
        </div>
    )
}

export default CollectionInfo;
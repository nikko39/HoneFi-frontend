import React from "react";
import './style.css'
import twitter_img from '../img/twitter.png'
import discord_img from '../img/discord.png'
import telegram_img from '../img/telegram.png'
import github_img from '../img/github.png'
import youtube_img from '../img/youtube.png'
import logo_main_page from '../img/logo_main_page.png';
import explorer_img from '../img/explore_img.png'
import documentation_img from '../img/documentation_img.png'
import creator_img from '../img/creator_img.png'
import user_img from '../img/user_img.png'
import logo_background from '../img/logo_background.png';

const MainPage = () => {
    return(
        <div>
            <div className="main_info">
                <div>
                    <h1 className="h1_header"><span style={{ 'color': '#6159B7'}}>Hone</span><span style={{ 'color': '#442361'}}>Fi</span></h1>
                    <h1 className="h1_header">Multifunctional platform</h1>
                    <p>for auctions, token sales and NFT distribution</p>
                    <div>      
                        <p style={{ 'display': 'flex', 'alignItems': 'center', 'flexWrap': 'wrap'}}>
                            <a style={{'margin': '0px 10px'}} href=""><img src={twitter_img}/></a>
                            <a style={{'margin': '0px 10px'}} href=""><img src={discord_img}/></a>
                            <a style={{'margin': '0px 10px'}} href=""><img src={telegram_img}/></a>
                            <a style={{'margin': '0px 10px'}} href=""><img src={github_img}/></a>
                            <a style={{'margin': '0px 10px'}} href=""><img src={youtube_img}/></a>
                        </p>
                    </div>
                </div>
                <div style={{ 'position': 'relative'}}>
                    <img className='main_page_img_background' src={logo_background}/>
                    <img className="main_page_img" src={logo_main_page} alt="" />
                </div>
            </div>
            <div className="TVL_div">
                <div className="TVL_info">
                    <h2>$2m+</h2>
                    <p>Sales value</p>
                </div>
                <div className="TVL_info">
                    <h2>300k+</h2>
                    <p>Unique Wallets</p>
                </div>
                <div className="TVL_info">
                    <h2>60+</h2>
                    <p>Launchpads</p>
                </div>
                <div className="TVL_info">
                    <h2>300+</h2>
                    <p>Completed Auctions</p>
                </div>
            </div>
            <h1 style={{'width': '80%', 'margin': '40px auto'}}>Choose from a variety <br/>
            of auction formats</h1>
            <div className="auction_info_div">
                <div className="auction_info">
                    <h2 style={{ 'color': '#6159B7'}}>Balance Pool</h2>
                    <p>Combination of two types of auctions - Dutch and British. The price changes depending on current demand/activity, either positively or negatively.</p>
                    <div className="auction_info_buttons">
                        <a className="auction_button" href=""><img src={documentation_img}/> Documentation</a>
                        <a className="auction_button" href=""><img src={explorer_img}/> Explore</a>
                    </div>
                </div>
                <div className="auction_info">
                    <h2 style={{ 'color': '#6159B7'}}>Dutch auction</h2>
                    <p>A type of auction in which the starting selling price decreases continuously at certain time intervals, helping to determine a fair price for each bidder.</p>
                    <div className="auction_info_buttons">
                        <a className="auction_button" href=""><img src={documentation_img}/> Documentation</a>
                        <a className="auction_button" href=""><img src={explorer_img}/> Explore</a>
                    </div>
                </div>
            </div>
            <h1 style={{'width': '80%', 'margin': '40px auto'}}>Follow our guides</h1>
            <div className="TVL_guides">
                <a className="guides_button" href=""><img src={creator_img}/> Creator</a>
                <a className="guides_button" href=""><img src={user_img}/> User</a>
            </div>
            <h1 style={{'width': '80%', 'margin': '40px auto'}}>Investors and Partners</h1>
            <div style={{ 'height': '200px'}}>

            </div>
        </div>
    )
}
export default MainPage;
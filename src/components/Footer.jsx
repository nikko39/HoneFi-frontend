import React from "react";
import emailimg from '../img/email.png'
import twitter_img from '../img/twitter.png'
import discord_img from '../img/discord.png'
import telegram_img from '../img/telegram.png'
import github_img from '../img/github.png'
import youtube_img from '../img/youtube.png'
import './footer.css'

function Footer() {
    return(
        <div className="footer">
            <div>
                <p>Subscribe to <span style={{ 'color': '#6159B7'}}>Hone</span><span style={{ 'color': '#442361'}}>Fi</span> newsletter</p>
                <p>Get the latest news and updates</p>
                <a className="Subscribe_footer" href=""><img src=""/><img src={emailimg}/> Subscribe</a>
                <p style={{ 'display': 'flex', 'alignItems': 'center'}}>
                    <a style={{'margin': '0px 10px'}} href=""><img src={twitter_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={discord_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={telegram_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={github_img}/></a>
                    <a style={{'margin': '0px 10px'}} href=""><img src={youtube_img}/></a>
                </p>
                <p style={{ 'color': '#47448C', 'fontWeight': 600, 'fontSize': '16px'}}>© 2022 HoneFi LTD, All Rights Reserved.</p>
            </div>
            <div style={{'width': 150}}>
                <p>Links</p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Auctions</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Launchpad</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Market</a></p>
            </div>
            <div style={{'width': 150}}>
                <p>Developers</p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="https://github.com/Nikko39/Honefi-Drops">GitHub</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="https://docs.honefi.app/">Documentation</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Big Bounty</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Careers</a></p>
            </div>
            <div style={{'width': 150}}>
                <p>Support</p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Community</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="https://docs.honefi.app/">Guides</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="https://docs.honefi.app/">F.A.Q</a></p>
            </div>
            <div style={{'width': 150}}>
                <p>About</p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Contact</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Company</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Brand</a></p>
                    <p><a style={{'fontWeight': 500, 'color': '#FFFFFF'}} href="">Partnership</a></p>
            </div>
        </div>
    )
}


export default Footer;
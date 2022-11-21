import React, {useEffect, useState} from "react";
import Logo from '../img/logo.png';
import logo_mobile from '../img/logo_mobile.png'
import logoWax from '../img/logo_wax.png';
import arrow from '../img/arrow.png';
import * as waxjs from "@waxio/waxjs/dist";
import { autoLogin, login } from "../wax/waxjs";
import { Link, useNavigate, NavLink } from "react-router-dom";
// import { loginanchor } from "../wax/anchor";
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
import {useDispatch, useSelector} from 'react-redux'
import { loginanchor, Logout, restoreSession } from "../wax/anchor";

const Header = () => {
    const dispatch = useDispatch();
    const Login = useSelector(state => state)
    const LoginChange = (metod, wallet) => {
        dispatch({type:"LOGIN", payload: {login: metod, wallet: wallet}})
    }
    const [Click, setClick] = useState(false);
    const [LoginButton, setLoginButton] = useState(false)
    useEffect(() => {
        restoreSession(LoginChange)
    },[])
        return(
            <>
                <div className="App-header">
                    {Click || LoginButton ? <button onClick={() => {setClick(false); setLoginButton(false)}} className="close_"></button> : ''}
                    <Link to='/'><img src={Logo} className='App-logo'/></Link>
                    <Link to='/'><img src={logo_mobile} className='App-logo-mobile'/></Link>
                    <ul className="header_web">
                        <li><NavLink to="/tokens"className='drop_choose_button'>Tokens</NavLink></li>
                        <li><NavLink to='/drops' className='drop_choose_button'>Drops</NavLink></li>
                        <li><NavLink to="/launchpad" className='drop_choose_button'>Launchpad</NavLink></li>
                        <li><a href="https://docs.honefi.app/" className='drop_choose_button'>Docs</a></li>
                    </ul>
                    <div className="buttons_div">
                        <div className="div_bu">
                            <button onClick={() => {
                                    LoginButton == false ? setLoginButton(true) : setLoginButton(false)
                                }} className={ Login.login != false ? 'network_choose' : 'network_choose_1'}>
                                { Login.login != false ? Login.wallet : "Connect Wallet" }
                                </button>
                                { Login.login == false ? LoginButton == true ? <div className="network_choose_2">
                                    <button className="network_choose_2_button">Cloud</button>
                                    <button onClick={() => {loginanchor(LoginChange)}} className="network_choose_2_button">Anchor</button>
                                </div> : '' : ''}
                                { Login.login != false ? LoginButton == true ?<div className="network_choose_2">
                                    <Link to='/create' className="network_choose_2_button">Create</Link>
                                    <button onClick={() => {Logout(LoginChange)}} className="network_choose_2_button">Logout</button>
                                </div> : '' : ''}
                        </div>
                        <div className="div_bu">
                            <button onClick={() => { Click == false ? setClick(true) : setClick(false)}} className="network_choose">
                                <img className="network_choose_img" src={logoWax}/>
                                <span>Testnet</span>
                                <img className="arrow_button" src={arrow}/>
                            </button>
                            { Click == true ?
                                    <div className="network_choose_2">
                                        <a className="network_choose_2_button">
                                            <img className="network_choose_img" src={logoWax}/>
                                             Mainnet</a>
                                        <a href="" className="network_choose_2_button">
                                            <img className="network_choose_img" src={logoWax}/>
                                             Testnet</a>
                                    </div>
                                    : ''}
                        </div>
                    </div>
                </div>
                <ul className="header_mobile">
                    <li><NavLink to="/tokens"className='drop_choose_button'>Tokens</NavLink></li>
                    <li><NavLink to='/drops' className='drop_choose_button'>Drops</NavLink></li>
                    <li><NavLink to="/launchpad" className='drop_choose_button'>Launchpad</NavLink></li>
                    <li><a href="https://docs.honefi.app/" className='drop_choose_button'>Docs</a></li>
                </ul>
            </>
        )
}

export default Header;
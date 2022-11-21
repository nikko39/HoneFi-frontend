import React from "react";
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
const AnchorLinkConsoleTransport = require('anchor-link-console-transport')

// app identifier, should be set to the eosio contract account if applicable
const identifier = 'example'
// initialize the browser transport
const transport = new AnchorLinkBrowserTransport()
// initialize the link
const link = new AnchorLink({
    transport,
    chains: [{
        chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
        nodeUrl: 'https://waxtestnet.greymass.com',
    }]
})

// the session instance, either restored using link.restoreSession() or created with link.login()
let session


// logout and remove session from storage
export function Logout(LoginChange) {
    link.restoreSession(identifier).then((result) => {
    session = result
    session.remove()
    LoginChange(false,false)
})}

// called when session was restored or created
function didLogin() {
    console.log(123 )
}
export  async function loginanchor(LoginChange){
    const identifier = 'example'
    const transport = new AnchorLinkBrowserTransport()
    const link = new AnchorLink({
        transport,
        chains: [{
            chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
            nodeUrl: 'https://waxtestnet.greymass.com',
        }]
    })
    link.login(identifier).then((result) => {
        session = result.session
        LoginChange('anchor', String(session.auth.actor))
    })
}
export function restoreSession(LoginChange) {
    const identifier = 'example'
    const transport = new AnchorLinkBrowserTransport()
    const link = new AnchorLink({
        transport,
        chains: [{
            chainId: 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12',
            nodeUrl: 'https://waxtestnet.greymass.com',
        }]
    })
    link.restoreSession(identifier).then((result) => {
        session = result
        if (session) {
            LoginChange('anchor', String(session.auth.actor))
        }
    })
}
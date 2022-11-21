import React, {useState} from "react";
import * as waxjs from "@waxio/waxjs/dist";

const wax = new waxjs.WaxJS({
    rpcEndpoint: 'https://wax.greymass.com'
}); 
export async function login() {
        try {
            //if autologged in, this simply returns the userAccount w/no popup
            let userAccount = await wax.login();
            document.getElementById('loginresponse').innerHTML = userAccount;
            
        } catch (e) {
            document.getElementById('loginresponse').append(e.message);
        }
    }
export async function autoLogin() {

    let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
    if (isAutoLoginAvailable) {
        let userAccount = wax.userAccount;
        // document.getElementById('loginresponse').innerHTML = userAccount + <button onClick={logout}></button>;
    }
    else {
        let sssss = 1;
    }
}
export async function buy_waxjs() {
    if(!wax.api) {
        return document.getElementById('response').append('* Login first *');
    }

    try {
        const result = await wax.api.transact({
        actions: [{
            account: 'eosio',
            name: 'delegatebw',
            authorization: [{
            actor: wax.userAccount,
            permission: 'active',
            }],
            data: {
            from: wax.userAccount,
            receiver: wax.userAccount,
            stake_net_quantity: '0.00000001 WAX',
            stake_cpu_quantity: '0.00000000 WAX',
            transfer: false,
            memo: 'This is a WaxJS/Cloud Wallet Demo.'
            },
        }]
        }, {
        blocksBehind: 3,
        expireSeconds: 30
        });
    } catch(e) {
        let sssss = 1;
    }
    }
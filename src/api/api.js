import React from "react";
export const $api = 'https://testnet.waxsweden.org'

export const chainFetch = {
    GetDrops: async () => {
        let data = await fetch(`${$api}/v1/chain/get_table_rows`, {
                method: 'post',
                    body: JSON.stringify({"json":true,"code":"balancertest","scope":"balancertest","table": "dropsssl","lower_bound":null,"upper_bound":null,"index_position":1,"key_type":"","limit":99999,"reverse":false,"show_payer":false}),
                    headers: {
                    'content-type': 'application/json'
                    }
            })
        data = await data.json()
        return data.rows
    },
}
export async function GetTokenDrops() {
    let data = await fetch('https://testnet.waxsweden.org/v1/chain/get_table_rows', {
            method: 'post',
                body: JSON.stringify({"json":true,"code":"balancertest","scope":"balancertest","table": "tokendrops","lower_bound":null,"upper_bound":null,"index_position":1,"key_type":"","limit":99999,"reverse":false,"show_payer":false}),
                headers: {
                'content-type': 'application/json'
                }
        })
    data = await data.json()
    return data.rows
}
export async function GetTemplate(id) {
    let data = await fetch('https://testnet.waxsweden.org/v1/chain/get_table_rows', {
            method: 'post',
                body: JSON.stringify({"json":true,"code":"balancertest","scope":"balancertest","table": "dropsssl","lower_bound":id,"upper_bound":id,"index_position":1,"key_type":"","limit":99999,"reverse":false,"show_payer":false}),
                headers: {
                'content-type': 'application/json'
                }
        })
    data = await data.json()
    data = await fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates/' + data.rows[0].collection + '/' + data.rows[0].templates)
    data = await data.json()
    data = data.data.immutable_data.img
    return data
}
export async function GetLogo(id) {
    let data = await fetch('https://testnet.waxsweden.org/v1/chain/get_table_rows', {
            method: 'post',
                body: JSON.stringify({"json":true,"code":"balancertest","scope":"balancertest","table": "dropsssl","lower_bound":id,"upper_bound":id,"index_position":1,"key_type":"","limit":99999,"reverse":false,"show_payer":false}),
                headers: {
                'content-type': 'application/json'
                } 
        })
    data = await data.json()
    data = await fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates/' + data.rows[0].collection + '/' + data.rows[0].templates)
    data = await data.json()
    data = data.data
    return data
}
export function GetTemplateImg(collection, template) {
    // let data = await fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates/' + collection + '/' + template)
    // // data = data.json()
    // // data = data.data.immutable_data.img
    // // console.log(data)
    // // return data
    return true;
}
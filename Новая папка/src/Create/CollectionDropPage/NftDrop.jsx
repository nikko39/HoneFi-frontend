import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import './style.css';
import plus from '../../img/plus.png';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AnchorLink from 'anchor-link'
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport'
const AnchorLinkConsoleTransport = require('anchor-link-console-transport');


function NftDrop() {
    let session
    const [Banner, setBanner] = useState('')
    const [Shemas, setShemas] = useState([0]);
    const [Template, setTemplate] = useState([0]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [Img, setImg] = useState({
        'img': 'QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M',
        'authorized_accounts': [0]
        })
    let collection = useParams().id;
    useEffect(() => {
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/collections/' + collection)
        .then(data => data.json())
        .then(data => setImg(data.data))
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/schemas?collection_name=' + collection + '&page=1&limit=100&order=desc&sort=created')
        .then(data => data.json())
        .then(data => setShemas(data.data))
        fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates?collection_name=' + collection + '&page=1&limit=100&order=desc&sort=created')
        .then(data => data.json())
        .then(data => setTemplate(data.data))
    },[])
    let img = "https://ipfs.hivebp.io/thumbnail?hash=" + Img.img;
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
    const onSubmit = (data) => {
        let dropstart = data.dropstartyear.split('-');
        let dates = Date.UTC(dropstart[0], (parseInt(dropstart[1]) - 1), dropstart[2], data.dropstarthour, data.dropstartmin)/1000;
        let dropend = data.dropendyear.split('-');
        let enddates = Date.UTC(dropend[0], (parseInt(dropend[1]) - 1), dropend[2], data.dropendhour, data.dropendmin)/1000;
            link.restoreSession(identifier).then((result) => {
            session = result    
            const action = {
                    account: 'balancertest',
                    name: 'createdrop',
                    authorization: [session.auth],
                    data: {
                        dropnum: 0,
                        changeprice: data.change,
                        changepricetime: data.changetime,
                        format: data.format,
                        username: session.auth.actor,
                        collection: collection,
                        shemas: data.shema,
                        templates: data.template,
                        price: parseInt(data.price).toFixed(8) + ' WAX',
                        supply: data.supply,
                        dropstart: dates,
                        dropend: enddates,
                        img: data.banner,
                        drop_name: data.dropname,
                        description: data.descriotion
                    }
                }
                session.transact({action})
        })
    }
    return(
        <div className="create_drop">
            <form  onSubmit={handleSubmit(onSubmit)}>
            <p>Create Drop</p>
            <div className="flex_diddc">
                <div className="col_img">
                    <div className="div_img_collection_create">
                        <img className="img_collection_create" src={img}/>
                    </div>
                    {collection}
                    <Link to="/create">Back</Link>
                </div>
                <div>
                    <p>Collection</p>
                        <div className="form_grid_1">
                            <div>
                              <p className="create__p">Type</p>
                              <select className="select_chema" {...register("format")}>
                                <option value='balancer'>Balance Pool</option>
                                <option value='dutch'>Dutch</option>
                              </select>
                            </div>
                            <div>
                                <p className="create__p">Shema</p>
                                <select className="select_chema" {...register("shema")}>
                                    <option></option>
                                    {Shemas.map(post=>
                                        <option>{post.schema_name}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <p className="create__p">Templates</p>
                                <select className="select_chema" {...register("template")}>
                                    {Template.map(post=>
                                        <option value={post.template_id}>{'Name: ' + post.name + ' | Template_id: ' + post.template_id + ' | Supply: ' + post.issued_supply + '/' + post.max_supply}</option>
                                    )}
                                </select>
                            </div>
                            <div>
                                <p className="create__p">Drop starts</p>
                                <div style={{ 'display': 'flex', 'alignItems': 'center'}}>
                                    <input style={{'width': 100}} min="2022" type="date" onClick={() => (console.log(123 ))} placeholder="dropstartdate" className="input_drop_page" {...register("dropstartyear")}/>
                                    <input style={{'width': 30, 'margin': '0px 5px'}} placeholder="Hour" className="input_drop_page" type="number" {...register("dropstarthour")}/>
                                    <span style={{ 'fontSize': '18px'}}>:</span>
                                    <input style={{'width': 30, 'margin': '0px 5px'}} placeholder="Min" className="input_drop_page" type="number" {...register("dropstartmin")}/>
                                </div>
                            </div>
                            <div>
                                <p className="create__p">Start price</p>
                                <input style={{'width': 144}} className="input_drop_page" {...register("price")} placeholder="Enter the amount" type="number" min='0'/>
                            </div>
                            <div style={{ 'fontSize': '14px'}}>
                                <p className="create__p">Price Change</p>
                                <input className="input_drop_page" {...register("change")} placeholder="Procent" type="number" min='0' />
                                <span>% every</span>
                                <input className="input_drop_page" {...register("changetime")} placeholder="Second" type="number" min='0'/>
                                <span>mins</span>
                            </div>
                            <div>
                                <p className="create__p">Drop end</p>
                                <div style={{ 'display': 'flex', 'alignItems': 'center'}}>
                                    <input style={{'width': 100}} min="2022" type="date" onClick={() => (console.log(123 ))} placeholder="dropenddate" className="input_drop_page" {...register("dropendyear")}/>
                                    <input style={{'width': 30, 'margin': '0px 5px'}} placeholder="Hour" className="input_drop_page" type="number" {...register("dropendhour")}/>
                                    <span style={{ 'fontSize': '18px'}}>:</span>
                                    <input style={{'width': 30, 'margin': '0px 5px'}} placeholder="Min" className="input_drop_page" type="number" {...register("dropendmin")}/>
                                </div>
                            </div>
                            <div>
                               <p className="create__p">Supply</p>
                               <input style={{'width': 144}} className="input_drop_page" {...register("supply")} placeholder="Supply" type="text"/>
                            </div>
                            <div>
                                <p className="create__p">NFTs per tx</p>
                                <input style={{'width': 144}} className="input_drop_page" {...register("nftTX")} placeholder="1" type="text"/>
                            </div>
                        </div>
                </div>
            </div>
            <div style={{ 'display': 'flex', 'gap': '30px'}}>
                <div>
                    <p className="create__p">Drop name</p>
                    <input style={{ 'width': '300px'}} className="input_drop_page" {...register("dropname")} placeholder="Enter name (max 150)" type="text"/>
                    <p style={{'margin-bottom': '0px'}} className="create__p">Banner image (1280x860)</p>
                    <input style={{ 'width': '200px'}} className="input_drop_page" {...register("banner")} placeholder="Ipfs hash" type="text" value={Banner} onChange={(event)=> {setBanner(event.target.value)}} />
                    <div className="hash">
                        {Banner == '' ? 'Banner preview' : <img src={'https://ipfs.hivebp.io/thumbnail?hash=' + Banner}/>}
                    </div>
                </div>
                <div>
                    <p className="create__p">Drop description</p>
                    <input style={{ 'width': '506px', 'height': '274px' }} className="input_drop_page" {...register("descriotion")} placeholder="Enter decription (max 450)" type="text" min='0'/>
                </div>
                <div style={{ 'margin': 'auto'}}>
                    <a className="back_butt">Back</a>
                    <input className="review_butt" type="submit" value='Review'/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default NftDrop;
import React, {useState, useEffect} from 'react';
import '../../index.css';
import Graphic from '../../components/graphic';


const  DropsGraphic = (props) => {
  const [time, setTime] = useState([])
  const id = props.data.dropnum;
  const [Temp_img, setTemp_img] = useState('QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M')
  async function test() {
    fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates/' + props.data.collection + '/' + props.data.templates)
    .then(data => data.json())
    .then(data => setTemp_img(data.data.immutable_data.img))

}
  useEffect(() => {
    test();
    fetch(`http://localhost:5000/api/price/${id}`).then(data =>data.json()).then((data) => {
      let array = [];
      let array1 = [];
      for(let i = 0;i < data.length; i++) {
        array.push(data[i].price)
      }
      for(let i = 0;i < data.length; i++) {
        array1.push(5)
      }
      setGrPrice(array)
      setTime(array1)
    })
  }, []);
  const [About, setAbout] = useState(true);
  const [grPrice,setGrPrice] = useState([parseInt(props.data.startprice),parseInt(props.data.startprice)*0.9,parseInt(props.data.startprice)*1.2,parseInt(props.data.startprice)*0.4,parseInt(props.data.startprice)*0.7])
  var month = [
    'January','February','March','April','May','June','July','August','September','October','November','December'
  ]
  let date_start = new Date (parseInt(props.data.dropstart * 1000));
  let date_end = new Date (parseInt(props.data.dropend * 1000));
  return (
    <div className="drop_graphic">
      <p className='swith_header'>
        <label className="switch">
            <input onChange={() => {About ? setAbout(false) : setAbout(true)}} type="checkbox"/>
            <span className="slider round">
                <span className="checkbox_flex">
                    <p className="z_ind">About</p>
                    <p className="z_ind">Chart</p>
                </span>
            </span>
        </label>
      </p>
      <div className='div_grid_graph'>
          <div>
            { About ? <Graphic grPrice={grPrice} labels={time} /> : 
            <>
              <div>
                <img src=""/>
              </div>
              <div style={{'color': 'white'}}>
                <div className='template_img_g'>
                  <img style={{'width': '100%'}} src={"https://ipfs.hivebp.io/thumbnail?hash=" + Temp_img}/>
                </div>
                <h2>{props.data.drop_name}</h2>
                <p style={{ 'fontSize': '14px', 'fontWeight': 500}}>{props.data.description}</p>
              </div>
            </>}

          </div>
          <div>
            <div className='ppp'></div>
            <h2 className='drop_name_graph'>{props.data.drop_name}</h2>
            <p className='mini_header'>Drops Time:</p>
              <p className='header_date'>
                {month[date_start.getMonth()] + ' ' + date_start.getUTCDay() + ', ' + date_start.getUTCHours() + ':' + date_start.getUTCMinutes() + ' UTC'} <br/>
                -<br/>
                {month[date_end.getMonth()] + ' ' + date_end.getUTCDay() + ', ' + date_end.getUTCHours() + ':' + date_end.getUTCMinutes() + ' UTC' }
              </p>
            <p className='mini_header'>Start price</p>
              <p className='header_date'>
                {parseInt(props.data.startprice)} WAX
              </p>
            <p className='mini_header'>Price change</p>
              <p className='header_date'>
                {props.data.changeprice}% per {props.data.changepricetime} seconds
              </p>
            <p className='mini_header'>Limits</p>
              <p className='header_date'>
                5 NFTs per tx
              </p>
          </div>
      </div>
    </div>

  );
}
export default DropsGraphic;
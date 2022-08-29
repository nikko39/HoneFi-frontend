import React, {useState, useEffect} from 'react';
import '../../index.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  hover: {
    intersect: false
  },
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Price History',
    },
    tooltips: {
      display: false,
      mode: false,
      callbacks: {
        title: function() {},
        label: function() {}
      }
    }
  },
};

const labels = ['','10:00', '14:00', '18:00',''];

var month = [
  'January','February','March','April','May','June','July','August','September','October','November','December'
]
const  DropsGraphic = (props) => {
  const [Temp_img, setTemp_img] = useState('QmYyoWRWQ7MnhwyhybxTW9NAUF5rBNxQPqSPvnYSM8H48M')
  async function test() {
    fetch('https://test.wax.api.atomicassets.io/atomicassets/v1/templates/' + props.data.collection + '/' + props.data.templates)
    .then(data => data.json())
    .then(data => setTemp_img(data.data.immutable_data.img))
}
  useEffect(() => {
    test();
  }, []);
  console.log(Temp_img)
  const [About, setAbout] = useState(true);
  const [HeaderText, setHeaderText] = useState('Header')
  const [Text, setText] = useState('text')
  const data = {
    scales: {
      xAxes: [{
          display: true,
          scaleLabel: {
              display: true,
              labelString: 'X axe name',
              fontColor:'#000000',
              fontSize:10
          },
          ticks: {
             fontColor: "black",
             fontSize: 14
            }
      }],
      yAxes: [{
          display: true,
          scaleLabel: {
              display: true,
              labelString: 'Y axe name',
              fontColor: '#FFFFF',
              fontSize:10
          },
          ticks: {
                fontColor: "black",
                fontSize: 14
          }
      }]
    },
    labels,
    datasets: [
      {
        label: '',
        data: [parseInt(props.data.startprice),parseInt(props.data.startprice)*0.9,parseInt(props.data.startprice)*1.2,parseInt(props.data.startprice)*0.4,parseInt(props.data.startprice)*0.7],
        borderColor: '#6159B7',
        backgroundColor: 'rgba(255, 99, 132, 0)',
        fill: false,
        borderWidth: 4,
        cubicInterpolationMode: 'monotone',
        pointBorderColor: 'rgba(0, 0, 0, 0)',
        pointBackgroundColor: 'rgba(0, 0, 0, 0)',
        pointHoverBackgroundColor: 'rgb(255, 99, 132)',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      }
    ],
  };
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
            { About ? <Line data={data} options={options}/> : 
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
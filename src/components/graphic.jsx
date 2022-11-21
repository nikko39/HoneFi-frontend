import React from 'react';
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

const Graphic = ({labels,grPrice}) => {
    const options = {
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
            data: grPrice,
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
    

    return(
        <>
            <Line data={data} options={options}/>
        </>
    )
}

export default Graphic;
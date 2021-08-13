import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

export class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: [],
      Cases: 0,
      Recovered: 0,
      Deaths: 0,
      Dates: 0,
    }
  }
  componentDidMount() {
    this.getUpdate();
  }

  getUpdate = () => {
    axios.get('https://api.covid19india.org/data.json')
      .then(res => {
        // console.log("Line Chart", res.data);
        this.setState({ allData: res.data.cases_time_series })
        const totalconfirmed = this.state.allData.map(i => i.totalconfirmed);
        const totalrecovered = this.state.allData.map(i => i.totalrecovered);
        const totaldeceased = this.state.allData.map(i => i.totaldeceased);
        const date = this.state.allData.map(i => i.date);

        this.setState({
          Cases: totalconfirmed,
          Recovered: totalrecovered,
          Deaths: totaldeceased,
          Dates: date,
        })
      })
  }
  render() {
    const { Dates, Cases, Deaths, Recovered } = this.state;
    return (
      <Bar
      data={{
        labels: Dates,
        datasets: [
          {
            label: 'Cases',
            data: Cases,
            fill: false,
            backgroundColor: '#fca903'
          },
          {
            label: 'Deaths',
            data: Deaths,
            fill: false,
            backgroundColor: '#d14356'
          },
          {
            label: 'Recovered',
            data: Recovered,
            fill: false,
            backgroundColor: '#49d170'
          }
        ]
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            fontColor: '#8a8a8a'
          }
        },
        tooltips: {
          enabled: true,
          backgroundColor: '#ededed',
          borderWidth: '2',
          borderColor: '#8a8a8a',
          titleFontColor: '#4a4a4a',
          bodyFontColor: '#4a4a4a',
          callbacks: {
            label: (tooltipItem, data) => {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 10,
                fontColor: '#2e2e2e'
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true
              },
              ticks: {
                beginAtZero: true,
                fontSize: 10,
                fontColor: '#2e2e2e'
              }
            }
          ]
        }
      }}
    />
    )
  }
}

export default BarChart



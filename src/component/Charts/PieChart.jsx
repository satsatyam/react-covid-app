import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

export class PieChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: [],
      Cases: 0,
      Recovered: 0,
      Deaths: 0,
    }
  }
  componentDidMount() {
    this.getUpdate();
  }

  getUpdate = () => {
    axios.get('https://api.covid19india.org/data.json')
      .then(res => {
        // console.log("API RESPONSE", res.data);
        this.setState({ allData: res.data.statewise })
        this.setState({AlltestData : res.data.tested})
        const totalconfirmed = this.state.allData.map(i => i.confirmed);
        const totalrecovered = this.state.allData.map(i => i.recovered);
        const totaldeceased = this.state.allData.map(i => i.deaths);
        
        this.setState({
          Cases: totalconfirmed[0],
          Recovered: totalrecovered[0],
          Deaths: totaldeceased[0],           
        })
      })
  }
  render() {
   const { Cases, Deaths, Recovered } = this.state;
    return (
      <Pie
      data={{
        datasets: [
          {
            data: [Cases, Deaths, Recovered],
            backgroundColor: ['#fca903', '#d14356', '#49d170']
          }
        ],
        labels: ['Cases', 'Deaths', 'Recovered']
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
          labels:[Cases, Deaths, Recovered]
        }
      }}
    />
    )
  }
}

export default PieChart


 

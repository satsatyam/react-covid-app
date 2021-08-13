import React, { Component } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';

export class AllIndiaStats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allData: [],


      totalconfirmed: 0,
      dailyconfirmed: 0,

      totalrecovered: 0,
      dailyrecovered: 0,

      totaldeceased: 0,
      dailydeceased: 0,

      LastUpdatedTime: 0,

      AlltestData: [],
      totalsamplestested: 0,
    }
  }
  componentDidMount() {
    this.getUpdate();
  }

  getUpdate = () => {
    axios.get('https://api.covid19india.org/data.json')
      .then(res => {
        console.log("API RESPONSE", res.data);
        this.setState({ allData: res.data.statewise })
        this.setState({ AlltestData: res.data.tested })
        const totalconfirmed = this.state.allData.map(i => i.confirmed);
        const dailyconfirmed = this.state.allData.map(i => i.deltaconfirmed);

        const totalrecovered = this.state.allData.map(i => i.recovered);
        const dailyrecovered = this.state.allData.map(i => i.deltarecovered);

        const totaldeceased = this.state.allData.map(i => i.deaths);
        const dailydeceased = this.state.allData.map(i => i.deltadeaths);

        const totalsamplestested = this.state.AlltestData.map(i => i.totalsamplestested);
        const updatedtime = this.state.allData.map(i => i.lastupdatedtime);

        this.setState({
          totalconfirmed: totalconfirmed[0],
          dailyconfirmed: dailyconfirmed[0],

          totalrecovered: totalrecovered[0],
          dailyrecovered: dailyrecovered[0],

          totaldeceased: totaldeceased[0],
          dailydeceased: dailydeceased[0],

          totalsamplestested: totalsamplestested[totalsamplestested.length-1],

          LastUpdatedTime: updatedtime[0],
        })
      })
  }

  render() {
    return (
      <>
        <h1 className='WWStatsHeader' style={{ textAlign: 'center', paddingTop: '10px' }}>
          <i className='fas fa-globe'></i> COVID-19 Status All Over INDIA
        </h1>

        <div className='WCDR'>

          <OverlayTrigger key='Confirmed'
            placement='bottom'
            overlay={<Tooltip className='myToolTip' id='tooltip-bottom'> Confirmed Cases</Tooltip>}>
            <div className='WWCases'>
              <p className='WWIcons'>
                <i className='fas fa-users'></i> Confirmed Cases
            </p>
              {this.state.totalconfirmed}
              {this.state.dailyconfirmed > 0 && (
                <span className='WWtodayResults'>+{this.state.dailyconfirmed}</span>)}
            </div>
          </OverlayTrigger>

          <OverlayTrigger key='Recovered'
            placement='bottom'
            overlay={<Tooltip className='myToolTip' id='tooltip-bottom'>Confirmed Recovered</Tooltip>}>
            <div className='WWRecovered'>
              <p className='WWIcons'>
                <i className='fas fa-hospital-user'></i> Recovered
            </p>
              {this.state.totalrecovered}
              {this.state.dailyrecovered > 0 && (
                <span className='WWtodayResults' >+{this.state.dailyrecovered}</span>)}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            key='Deaths'
            placement='bottom'
            overlay={<Tooltip className='myToolTip' id='tooltip-bottom'> Confirmed Deaths</Tooltip>}>
            <div className='WWDeaths'>
              <p className='WWIcons'>
                <i className='fas fa-skull'></i> Deaths
            </p>
              {this.state.totaldeceased}
              {this.state.dailydeceased > 0 && (
                <span className='WWtodayResults'>+{this.state.dailydeceased}</span>)}
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            key='Tests'
            placement='bottom'
            overlay={
              <Tooltip className='myToolTip' id='tooltip-bottom'>
                Confirmed Tests
            </Tooltip>
            }>
            <div className='WWTests'>
              <p className='WWIcons'>
                <i className='fas fa-vial'></i> Tests</p>{this.state.totalsamplestested}
            </div>
          </OverlayTrigger>
        </div>
        <p className='lastUpdate'>
          <i className='far fa-clock' />
        Last update : <span>{this.state.LastUpdatedTime}</span>
        </p>
      </>
    )
  }
}

export default AllIndiaStats

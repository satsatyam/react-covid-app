import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllIndiaStats from './AllIndiaStats';
import AllStateList from '../State_UT_List/AllStateList';
import GoogleMap from '../Map/GoogleMap';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';

export class MidSectionContainer extends Component {
  render() {
    return (
      <Container className='MidSection' fluid>
        <Row>
          <Col xs='12' sm='12' md='12' lg='12' xl='12'>
            <AllIndiaStats />
          </Col>
        </Row>
        <Row className='rowPadding'>
          <Col xs='12' sm='12' md='12' lg='4' xl='4' className='noPadding'>
            <p className='countriesListHeader'>
              <i className='far fa-flag'></i>State/UT Status
          </p>
            <div className='countriesListContainer'>
              <AllStateList />
            </div>
          </Col>
          <Col xs='12' sm='12' md='12' lg='8' xl='8' className='noPadding'>
            <p className='mapHeader'>
              <i className='fas fa-globe-africa'></i>COVID-19 Pandemic Map
          </p>
            <div className='GlobalMap'>
              <GoogleMap />
            </div>
          </Col>
        </Row>
        <Row>
          <p className='chartsTitle'>
            <i className='fas fa-chart-pie'></i>COVID-19 Pandemic Line Chart
          </p>
          <Col xs='12' sm='12' md='4' lg='4' xl='12' className='noPadding'>
            <div className='chartsAA' >
              <LineChart />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12' sm='12' md='4' lg='4' xl='12' className='noPadding'>
            <p className='chartsTitle'>
              <i className='fas fa-chart-pie'></i>COVID-19 Pandemic Bar Chart
          </p>
            <div className='chartsAA' >
              <BarChart />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12' sm='12' md='4' lg='4' xl='12' className='noPadding'>
            <p className='chartsTitle'>
              <i className='fas fa-chart-pie'></i>COVID-19 Pandemic Pie Chart
          </p>
            <div className='chartsAA' >
              <PieChart />
            </div>
          </Col>
        </Row>


      </Container>
    )
  }
}

export default MidSectionContainer

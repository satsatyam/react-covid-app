import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export class StateListItem extends Component {
  render() {
    return (
     <div className='CountryListItem'>
        <p className='CountryName'>{this.props.i.state}</p>
      <div className='CDR'>
        <OverlayTrigger
          key='Cases'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Cases
            </Tooltip>
          }>
          <div className='Cases'>
            <i className='fas fa-users'></i>
            {this.props.i.confirmed}
            {this.props.i.deltaconfirmed > 0 && (
              <span className='todayResults'>
                +
                {this.props.i.deltaconfirmed
                  }
              </span>
            )}
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key='Active'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Active
            </Tooltip>
          }>
          <div className='Active'>
            <i className='	fas fa-lungs-virus'></i>
            {this.props.i.active}
          </div>
        </OverlayTrigger>

        <OverlayTrigger
          key='Recovered'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Recovered
            </Tooltip>
          }>
          <div className='Recovered'>
            <i className='fas fa-hospital-user'></i>
            {this.props.i.recovered}
          </div>
        </OverlayTrigger>


        <OverlayTrigger
          key='Deaths'
          placement='bottom'
          overlay={
            <Tooltip className='myToolTip' id='tooltip-bottom'>
              Confirmed Deaths
            </Tooltip>
          }>
          <div className='Deaths'>
            <i className='fas fa-skull'></i>
            {this.props.i.deaths}
            {this.props.i.deltadeaths > 0 && (
              <span className='todayResults'>
                +
                {this.props.i.deltadeaths}
              </span>
            )}
          </div>
        </OverlayTrigger>
      </div>
    </div>

    )
  }
}
 
export default StateListItem

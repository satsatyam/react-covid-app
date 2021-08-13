import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import logo from '../Assets/images/logo.svg';

export class NavBar extends Component {
  render() {
    return (
        <Navbar className='Navbar' variant='light' expand='lg' sticky='top'>
          <Container>
            <OverlayTrigger
              placement='bottom'
              delay={{ show: 150, hide: 150 }}
              overlay={<Tooltip className='myToolTip'>COVID-19 Tracker</Tooltip>}>
              <Navbar.Brand className='titleContiner'>
                <img src={logo} alt='logo' className='logo' />
                <p className='title'>COVID-19 Tracker by SATYAM</p>
              </Navbar.Brand>
            </OverlayTrigger>
          </Container>
        </Navbar>
    )
  }
}
export default NavBar

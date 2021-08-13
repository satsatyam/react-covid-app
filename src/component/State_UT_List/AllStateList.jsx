import React, { Component } from 'react';
import axios from 'axios';
import StateListItem from './StateListItem';


export class AllStateList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allStateData: [],
    }
  }
  componentDidMount() {
    this.getUpdate();
  }

  getUpdate = () => {
    axios.get('https://api.covid19india.org/data.json')
      .then(res => {
        // console.log("API RESPONSE", res.data);
        this.setState({ allStateData: res.data.statewise })
      })
  }
  render() {
    return (
      <>
        <div className='AllCountriesList'>
          {this.state.allStateData.map((i,index) => (
            <StateListItem i={i} key={index} />
          ))}
        </div>
      </>
    )
  }
}

export default AllStateList

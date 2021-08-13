import React, { Component } from 'react'
import axios from 'axios';
import '../App.css'

const tableHeaderData = [
  { id: 0, header: "Sr.no" },
  { id: 1, header: "State/UT" },
  { id: 2, header: "Confirmed" },
  { id: 3, header: "Active" },
  { id: 4, header: "Recovered" },
  { id: 5, header: "Death" }
]

class TrackCovid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: [],
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
      })
  }

  render() {
    console.log("All Data", this.state.allData);
    return (
      <div className="App">
        <table style={{ width: '80%', border: '1px solid grey', borderCollapse: 'collapse', margin: 'auto' }}>
          <thead>
            <tr>
              {tableHeaderData.map(item => (
                <th key={item.id} style={{ border: '1px solid grey' }}>{item.header}</th>
              ))}
            </tr>
          </thead>

          {this.state.allData.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td style={{ border: '1px solid grey' }}>{index}</td>
                <td style={{ border: '1px solid grey' }}>{item.state}</td>
                <td style={{ border: '1px solid grey' }}>{item.confirmed}</td>
                <td style={{ border: '1px solid grey' }}>{item.active}</td>
                <td style={{ border: '1px solid grey' }}>{item.recovered}</td>
                <td style={{ border: '1px solid grey' }}>{item.deaths}</td>
              </tr>
            </tbody>
          ))}
        </table>

      </div>
    )
  }
}

export default TrackCovid

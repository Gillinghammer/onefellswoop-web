import React from 'react';
import helpers from '../helpers';
import { Router, Route, Link, hashHistory } from 'react-router'

class Employers extends React.Component {
  constructor(props){
    super(props);
    this.state = {  employers: [] }
  }
  componentDidMount(){
    helpers.getEmployers()
      .then(function(data) {
        console.log("data", data.data)
        this.setState({
          employers: data.data
        })
      }.bind(this))
  }
  render(){
    return (
      <div>
        <h3> Employers </h3>
        <ul>
          {this.state.employers.map((employer, index) => {
            return (
              <li key={employer.name}>
                <div>
                <h3>{employer.name} | {employer.location}</h3>
                <p>{employer.website}</p>
                <p><Link to={"employers/" + employer._id }>Employer Profile</Link></p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Employers;
import React from 'react';
import helpers from '../helpers';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router'

class Admin extends React.Component {
  constructor(){
    super();
    this.state = {  employers: [],
                    candidates: [] }
  }
  componentWillMount(){
    helpers.getAll()
      .then(function(data) {
        console.log("helper data: ", data)
        this.setState({
          employers: data.employers,
          candidates: data.candidates
        })
      }.bind(this))
  }
  render(){
    var listEmployers = ()=> {
          return (<div className="list-group">
              {this.state.employers.map((employer, index) => (
                  <Link to={"employers/" + employer._id } className="list-group-item" key={index} >
                    <h4 className="list-group-item-heading">{employer.name}</h4>
                    <p className="list-group-item-text pull-right">{employer.location}</p>
                    <p className="list-group-item-text">{employer.website} / {employer.primaryEmail}</p>
                  </Link>
              ))}
              </div>);
        }
    var listCandidates = ()=> {
      return (<div className="list-group">
          {this.state.candidates.map((candidate, index) => (
              <a href={"#/candidates/" + candidate._id } className="list-group-item" key={index}>
                <h4 className="list-group-item-heading">{candidate.lastName}, {candidate.firstName}</h4>
                <p className="list-group-item-text pull-right">{candidate.location}</p>
                <p className="list-group-item-text">{candidate.email} / {candidate.phone}</p>
              </a>
          ))}
          </div>);
    }
    return (
      <div className="row">
        <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Employers</h3>
          </div>
          <div className="panel-body">
            {listEmployers()}
          </div>
        </div>
        </div>
        <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Candidates</h3>
          </div>
          <div className="panel-body">
            {listCandidates()}
          </div>
        </div>
        </div>
      </div>
      )
  }
}

module.exports = Admin;
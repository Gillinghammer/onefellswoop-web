import React from 'react';
import helpers from '../helpers';
import Editable from './Editable';

class EmployerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
                   website: "",
                   employer: []
                 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.name == "name") {
      this.setState({name: event.target.value});
    }
    if(event.target.name == "website") {
      this.setState({ website: event.target.value });
    }
  }

  handleSubmit(event) {
    console.log('Company Name: ', this.state.name);
    console.log('Company Website: ', this.state.website);
    event.preventDefault();

    helpers.getEmployer(this.state.name, this.state.website)
      .then(function(data) {
        console.log("data", data.data)
        this.setState({
          employer: data.data
        })
      }.bind(this))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Company Name" />
          <input type="text" name="website" value={this.state.value} onChange={this.handleChange} placeholder="www.company.com" />
          <input type="submit" value="Submit" />
        </form>
          <h3>{ this.state.employer.name }</h3>
          <h4>{ this.state.employer._id }</h4>
          <h4>{ this.state.employer.website }</h4>
          <h4>{ this.state.employer.primaryEmail }</h4>

      </div>
    );
  }
}

module.exports = EmployerProfile;
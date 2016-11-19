import React from 'react';
import helpers from '../helpers';
import Editable from './Editable';

class EmployerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employer: {} };
  }
  componentDidMount(){
    console.log("params", this.props.params.employerid)
    helpers.getEmployer(this.props.params.employerid)
      .then(function(data) {
        console.log("employer data: ", data.data)
        this.setState({
          employer: data.data
        })
        console.log(this.state)
      }.bind(this))
    }
  render() {
    return (
      <div>
        hello {this.state.employer.name || "world" }
      </div>
    );
  }
}

module.exports = EmployerProfile;
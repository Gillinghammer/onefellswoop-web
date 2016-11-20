import React from 'react';
import helpers from '../helpers';
import Editable from './Editable';

class EmployerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { employer: {},
                   edit: { info: false }
                 };
  }
  componentDidMount(){
    helpers.getEmployer(this.props.params.employerid)
      .then(function(data) {
        this.setState({
          employer: data.data
        })
      }.bind(this))
    }
  handleSave(save, refsObj ){
    helpers.updateEmployer(this.state.employer)
      .then(function(data) {
        save.setState({edit:{info: !save.state.edit.info}});
        Object.keys(refsObj).map(function(ref, index) {
              if (refsObj[ref].value.length > 0) refsObj[ref].value = ""
        })
      })
  }
  handleUpdate(){
    var employer = this.state.employer
    let refsObj = this.refs
    Object.keys(refsObj).map(function(ref, index) {
      if (refsObj[ref].value.length > 0) employer[ref] = refsObj[ref].value
    })
    this.setState({ employer: employer })
    this.handleSave(this, refsObj)
  }
  render() {
    const editButton = ()=> {
      if(this.state.edit.info) {
        return <button type="button" className="btn btn-primary" onClick={()=> this.handleUpdate() }>Update</button>
      } else {
        return <button type="button" className="btn btn-success disabled" >Updated</button>
      }
    }
    return (
      <div className="row">
        <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Company Info</h3>
          </div>
          <div className="panel-body">
            <div className="input-group">
              <h5>Company name</h5>
              <input onBlur={() => this.setState({edit: {info: true}}) } ref="name" type="text" className="form-control" placeholder={ this.state.employer.name }/>
            </div>
            <div className="input-group">
              <h5>Location</h5>
              <input onBlur={() => this.setState({edit: {info: true}}) } ref="location" type="text" className="form-control" placeholder={ this.state.employer.location }/>
            </div>
            <div className="input-group">
              <h5>Website</h5>
              <input onBlur={() => this.setState({edit: {info: true}}) } ref="website" type="text" className="form-control" placeholder={ this.state.employer.website }/>
            </div>
            <div className="input-group">
              <h5>Primary email</h5>
              <input onBlur={() => this.setState({edit: {info: true}}) } ref="primaryEmail" type="text" className="form-control" placeholder={ this.state.employer.primaryEmail } />
            </div>
            <div style={ {paddingTop: "20px"}} className="btn-group" role="group" aria-label="...">
            { editButton() }
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Targetted Educations</h3>
          </div>
          <div className="panel-body">
            <div className="list-group">
              <a href="#" className="list-group-item" >
                <h4 className="list-group-item-heading">Headline</h4>
                <p className="list-group-item-text pull-right">text right</p>
                <p className="list-group-item-text">Details</p>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Targetted Experience</h3>
          </div>
          <div className="panel-body">
            <div className="list-group">
              <a href="#" className="list-group-item" >
                <h4 className="list-group-item-heading">Headline</h4>
                <p className="list-group-item-text pull-right">text right</p>
                <p className="list-group-item-text">Details</p>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Other Items</h3>
          </div>
          <div className="panel-body">
            <div className="list-group">
              <a href="#" className="list-group-item" >
                <h4 className="list-group-item-heading">Headline</h4>
                <p className="list-group-item-text pull-right">text right</p>
                <p className="list-group-item-text">Details</p>
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

module.exports = EmployerProfile;
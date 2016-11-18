import React from 'react';

class Editable extends React.Component {
  constructor(props){
    super(props);
    this.state = {  editable: false, text: this.props.children}
  }
  render(){
    if(this.state.editable == false) {
      return (<span onClick={() => this.setState({ editable: !this.state.editable}) }>
                { this.state.text || "" }
             </span>)
    } else {
      return <input onBlur={() => this.setState({ editable: !this.state.editable}) } value={this.state.text.props.children} />
    }
  }
}

module.exports = Editable;
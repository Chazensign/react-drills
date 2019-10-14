import React, { Component } from 'react';
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <li>{this.props.item}</li>
     );
  }
}
 
export default ToDo;
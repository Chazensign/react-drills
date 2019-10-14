import React, { Component } from 'react';
import ToDo from './ToDo'

class List extends Component {
  
  render() { 
    let list = this.props.taskArr.map((item, i)=> {
      return <ToDo key={i} task={item} />
    })
    return ( 
      <div>{list}</div>
     )
  }
}

 
export default List;
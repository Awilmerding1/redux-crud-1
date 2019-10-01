import React from 'react';
import {connect} from 'react-redux'


import Todo from './Todo'

class Todos extends React.Component {


  render() {
    return (
      <div>
        {this.props.todos && this.props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
      </div>
    );
  }
}



export default Todos

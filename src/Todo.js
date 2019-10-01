import React from 'react';
import {connect} from 'react-redux'
import UpdateTodoForm from './UpdateTodoForm'

class Todo extends React.Component {


  render() {
    return (
      <div>
        <h4>{this.props.todo.title}</h4>
        <p>{this.props.todo.description}</p>
        <button>Delete</button>
        <UpdateTodoForm />
      </div>
    );
  }
}

export default Todo;

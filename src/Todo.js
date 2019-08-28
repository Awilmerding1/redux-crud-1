import React from 'react';
import {deleteTodo} from './actions/deleteTodo'
import {connect} from 'react-redux'
import UpdateTodoForm from './UpdateTodoForm'

class Todo extends React.Component {

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <div>
        <h4>{this.props.todo.title}</h4>
        <p>{this.props.todo.description}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <UpdateTodoForm todoId={this.props.todo.id}/>
      </div>
    );
  }
}

export default connect(null, {deleteTodo})(Todo);

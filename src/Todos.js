import React from 'react';
import {connect} from 'react-redux'
import {fetchTodos} from './actions/fetchTodos'

import Todo from './Todo'

class Todos extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => <Todo key={todo.title} todo={todo}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos}
}


export default connect(mapStateToProps, {fetchTodos})(Todos)

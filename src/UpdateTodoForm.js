import React from 'react';
import {connect} from 'react-redux'
import {editTodo} from './actions/editTodo'

class UpdateTodoForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.editTodo(this.state, this.props.todoId)
    this.setState({
      title: '',
      description: ''
    })
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Todo!</h3>
        <form onSubmit={this.onSubmit}>
          <label>Title:   </label>
          <input onChange={this.onChange} type="text" value={this.state.title} name="title"/><br/><br/>
          <label>   Content:   </label>
          <textarea onChange={this.onChange} type="text" value={this.state.description} name="description"/><br/><br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       addTodo: todo => dispatch({type: 'ADD_TODO', payload: todo})
//     }
// }


export default connect(null, {editTodo})(UpdateTodoForm);

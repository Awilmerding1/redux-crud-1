import React from 'react';
import {connect} from 'react-redux'


class TodoForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
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



export default TodoForm

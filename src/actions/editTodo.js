export const editTodo = (todo, todoId) => {
  // let updatedTodo = {...todo, id: todoId}

  return dispatch => {
    fetch(`http://localhost:3005/api/v1/todos/${todoId}`, {
      method: "PATCH",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
    .then(todo => dispatch({type: 'EDIT_TODO', payload: todo}))
  }
}

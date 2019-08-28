export const deleteTodo = (todoId) => {
  return dispatch => {
    fetch(`http://localhost:3005/api/v1/todos/${todoId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(todo => dispatch({type: "DELETE_TODO", payload: todo}))
  }
}

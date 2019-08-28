
export const addTodo = (todo) => {
  return dispatch => {
    return fetch('http://localhost:3005/api/v1/todos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    })
    .then(resp => resp.json())
    .then(todo => dispatch({type: 'ADD_TODO', payload: todo}))
  }
}

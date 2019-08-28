export const fetchTodos = () => {
  return dispatch => {
     return fetch('http://localhost:3005/api/v1/todos')
        .then(response => response.json())
        .then(todos => dispatch(fetchTodosActionCreator(todos)))
    }
}

const fetchTodosActionCreator = (todos) => {
    return {
      type: 'FETCH_TODOS',
      payload: todos
    }
}



export default function todoReducer(state = {todos: []}, action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {...state, todos: action.payload}
    case 'ADD_TODO':
      return {...state, todos: [...state.todos, action.payload]}
    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(todo => todo.id !== action.payload.id)}
    case 'EDIT_TODO':
      return {...state, todos: state.todos.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo
        } else {
          return action.payload
        }
      })}
    default:
        return state
  }
}

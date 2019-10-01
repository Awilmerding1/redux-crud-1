

export default function todoReducer(state = {todos: []}, action) {
  switch (action.type) {
    case 'FETCH_TODOS':
      return state
    case 'ADD_TODO':
      return state
    case 'DELETE_TODO':
      return state
    case 'EDIT_TODO':
      return state
    default:
        return state
  }
}

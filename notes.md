const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(todoReducer, composeEnhancers(applyMiddleware(thunk)))

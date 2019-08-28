import React from 'react';

import Todos from './Todos'
import TodoForm from './TodoForm'

class App extends React.Component {

  render() {
    return (
      <div>
        <TodoForm />
        <Todos />
      </div>
    );
  }
}

export default App;

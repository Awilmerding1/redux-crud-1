import React from 'react';
import {Route} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

import Todos from './Todos'
import TodoForm from './TodoForm'

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
          <Nav.Link href='/todos/new'>New Todo</Nav.Link>
          <Nav.Link href='/todos'>All Todos</Nav.Link>
          </Nav>
        </Navbar>
        <Route path='/todos/new' component={TodoForm}/>
        <Route exact path='/todos' component={Todos}/>
      </>
    );
  }
}

export default App;

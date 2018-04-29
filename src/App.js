import React, { Component } from 'react'
import './styles/App.css'
import TodoApp from './todo-redux-thunk/components/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

export default App;

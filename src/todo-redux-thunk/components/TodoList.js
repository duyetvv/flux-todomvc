import React, { Component } from 'react';

import TodoItem from './TodoItem';

const REF_FILTERS = {
  'true': 'active',
  'false': 'inactive'
}

export default class TodoList extends Component {

  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    const { todos, filters } = this.props;
    const renderList = todos.filter(todo => (
      filters.indexOf(REF_FILTERS[todo.status.toString()]) > -1
    ))
    return (
      <ul>
        {
          renderList.map((item, idx)=> (
            <TodoItem
              key={idx}
              data={item}
              updateItem={this.props.updateTodo}
              deleteItem={this.props.deleteTodo}/>
          ))
        }
      </ul>
    );
  }
}

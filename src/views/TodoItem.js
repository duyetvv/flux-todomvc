import { Component } from 'react';
import classnames from 'classnames';

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.todo = this.props.todo;
    this.editing = this.props.editing;

    this.onToggleTodo = this.onToggleTodo.bind(this);
    this.onStartEditingTodo = this.onStartEditingTodo.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
  }

  onToggleTodo() {
    this.props.onToggleTodo(this.todo.id);
  }

  onStartEditingTodo() {
    this.props.onStartEditingTodo(this.todo.id);
  }

  onDeleteTodo() {
    this.props.onDeleteTodo(this.todo.id);
  }

  render() {
    const isEditing = this.editing === this.todo.id;

    return (
      <li
        className={classnames({
          completed: this.todo.complete,
          editing: isEditing,
        })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.todo.complete}
            onChange={this.onToggleTodo}
          />
          <label onDoubleClick={this.onStartEditingTodo}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this.onDeleteTodo} />
        </div>
      </li>
    );
  }
}

export default ToDoItem;

import { Component } from 'react';

const ENTER_KEY_CODE = 13;

class NewTodo extends Component {
  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  addTodo() {
    this.props.onAdd(this.props.draft);
  }

  onBlur() {
    this.addTodo();
  }

  onChange(evt) {
    this.props.onUpdateDraft(evt.target.value);
  }

  onKeyDown() {
    if(evt.keyCode === ENTER_KEY_CODE) {
      this.addTodo();
    }
  }

  render() {
    return (
      <input
        autoFocus={true}
        id="new-todo"
        placeholder="What needs to be done?"
        value={this.props.draft}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  }
}

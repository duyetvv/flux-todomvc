import React, { Component } from 'react';

import { FILTERS } from '../constants'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  onChange(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  onFilter(evt) {
    const { checked, name } = evt.target;
    this.props.updateFilter(name, checked)
  }

  addTodo(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state.value)

    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form className="todoForm header" onSubmit={this.addTodo.bind(this)}>
        <h1>Welcome to react todo!</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          placeholder="Title..."/>
        <button className="addBtn" type="submit">Add</button>
        <div className="todoFilter">
          {
            FILTERS.map((ele, idx) => (
              <label key={idx} htmlFor={ele}>{ele}
                <input
                  type="checkbox"
                  checked={(this.props.filters.indexOf(ele) > -1)}
                  name={ele}
                  id={ele}
                  onChange={this.onFilter.bind(this)}/>
              </label>
            ))
          }
        </div>
      </form>
    )
  }
}

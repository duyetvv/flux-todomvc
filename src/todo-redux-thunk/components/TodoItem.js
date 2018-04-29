import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: this.props.data.name,
      isEdit: false
    }
  }

  onToggleItem() {
    const data = { ...this.props.data }
    data.status = !data.status
    this.props.updateItem(data)
  }

  onChangeName(evt) {
    this.setState({ name: evt.target.value })
  }
  
  onEditSave(evt) {
    evt.preventDefault()
    const data = { ...this.props.data }
    data.name = this.state.name

    this.props.updateItem(data)

    this.setState({ isEdit: false })
  }

  eidtItem (evt) {
    evt.stopPropagation()
    this.refs.input.select()
    this.setState({ isEdit: true })
  }

  deleteItem(evt) {
    evt.stopPropagation()
    this.props.deleteItem(this.props.data)
  }

  render() {
    const { data } = this.props;
    return (
      <li className={['todoItem', (data.status ? '' : 'inactive')].join(' ')}>
        <span className="todoItemStatus" onClick={this.onToggleItem.bind(this)}></span>
        <span className="todoItemName">{data.name}</span>
        <form className={["todoItemForm", this.state.isEdit ? "show" : ''].join(' ')}
          onSubmit={this.onEditSave.bind(this)}>
          <input 
            className="todoItemInput" 
            value={this.state.name}
            ref="input"
            onChange={this.onChangeName.bind(this)}
            onBlur={this.onEditSave.bind(this)}/>
        </form>
        <span 
          className={["todoItemEdit", this.state.isEdit ? 'hide' : ''].join(' ')} 
          onClick={this.eidtItem.bind(this)}>
        </span>
        <span className="todoItemDel" onClick={this.deleteItem.bind(this)}></span>
      </li>
    );
  }
}

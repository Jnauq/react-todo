import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '1em',
      borderBottom: '1px #fff solid',
      color: this.props.todo.completed ? '#dcdcdc' : '#333333',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo
    return (
        <div style={this.getStyle()}>
            <p>
              <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> { ' ' }
              { title }
              <button style={btnDelete} onClick={this.props.delItem.bind(this, id)}> X </button>
            </p>
        </div>
    );
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnDelete = {
  background: 'red',
  color: '#fff',
  padding: '5px 10px',
  cursor: 'pointer',
  float: 'right',
  border: 'none'
}

export default TodoItem;
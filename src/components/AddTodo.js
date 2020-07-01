import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }

  render() {
    return (
      <form style={{ display: 'flex'}} onSubmit={this.onSubmit}>
        <input style = { inputTodo }
          type= 'text'
          name= 'title'
          placeholder= 'Todo task ...'
          value= {this.state.title}
          onChange= {this.onChange}
        />
        <button style={ btnAdd } type='submit'>
            Submit
        </button>
      </form>
    )
  }
}

const btnAdd = {
  background: '#777',
  color: '#fff',
  flex: '1',
  padding: '5px',
  cursor: 'pointer',
  float: 'right',
  border: 'none'
}

const inputTodo = {
  flex: '10', 
  padding: '5px', 
  fontSize: '20px'
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;
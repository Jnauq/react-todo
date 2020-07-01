import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';

import './App.css';

class App extends Component {

  state = {
    globid: 4,
    todos: [
      {
        id: 1,
        title: 'Take out trash and recyle compost',
        created: '2020-05-20',
        completed: false
      },
      {
        id: 2,
        title: 'Laundry - towels and bedsheets',
        created: '2020-06-14',
        completed: false
      },
      {
        id: 3,
        title: 'Wash and vacuum car',
        created: '2020-07-04',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  delItem = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.globid,
      title,
      created: new Date().toLocaleDateString(),
      completed: false
    }
    this.setState({ globid: this.state.globid + 1})
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delItem={this.delItem} />
      </div>
    );
  }
}

export default App;

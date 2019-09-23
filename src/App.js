import React, { Component } from 'react';
import Todos from './Todos'
import DoneTodos from './doneTodos'
import AddTodo from './AddTodo'
import todosData from "./todosData"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    //this.handleChange = this.handleChange.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    const list = window.localStorage.getItem('savedList');
    const todosData = JSON.parse(list);

    this.setState({
      todos: todosData,
    })
  }

  completeTodo = (id) => {
    const completeTodos = this.state.todos.filter(todo => {
      return todo.id === id
    });

    const completeTodos2 = completeTodos.map(todo => {
      return todo.completed = true
    })

    this.setState({
      completeTodos2
    }, () => {
      window.localStorage.setItem('savedList', JSON.stringify(this.state.todos));
    });
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    });
    this.setState({
      todos
    }, () => {
      window.localStorage.setItem('savedList', JSON.stringify(this.state.todos));
    });
  }

  deleteDoneTodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    });
    this.setState({
      todos
    }, () => {
      window.localStorage.setItem('savedList', JSON.stringify(this.state.todos));
    });
  }



  addTodo = (todo) => {
    todo.id = Math.random();
    todo.completed = false;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    }, () => {
      window.localStorage.setItem('savedList', JSON.stringify(this.state.todos));
    });
  }


  Index = () => {
    return (
      <div>
        <Todos todos={this.state.todos} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }

  Done = () => {
    return (
      <div>
        <DoneTodos todos={this.state.todos} deleteDoneTodo={this.deleteDoneTodo} />
      </div>
    )
  }

  render() {
    return (
      <Router>
        <div className="todo-app container">
          <nav class="nav-wrapper indigo">
            <div class="brand-logo center" >Todo App</div>
            <ul class="left" >
              <li><Link to="/todos">Todo</Link></li>
              <li><Link to="/finished-todos/">Done</Link></li>
            </ul>
          </nav>




          <Route exact path="/todos" component={this.Index} />
          <Route path="/finished-todos" component={this.Done} />

        </div>
      </Router>
    );
  }
}
export default App;
import React, { Component } from 'react';
import Todos from './Todos'
import DoneTodos from './doneTodos'
import AddTodo from './AddTodo'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Build To-Do app' },
    ],
    doneTodos: [
      { id: 100, content: 'Survive Friday' }
    ]
  }

  completeTodo = (id) => {

    const todos = this.state.todos.filter(todo => {
      this.state.doneTodos.push(todo)
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {

      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  deleteDoneTodo = (id) => {
    const doneTodos = this.state.doneTodos.filter(doneTodos => {
      return doneTodos.id !== id
    });
    this.setState({
      doneTodos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  Index = () => {
    return (
      <div>
        <Todos todos={this.state.todos} completeTodo={this.completeTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }

  Done = () => {
    return (
      <div>
          <DoneTodos doneTodos={this.state.doneTodos} deleteDoneTodo={this.deleteDoneTodo} />
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
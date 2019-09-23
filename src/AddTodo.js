
import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        text: ''
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // call function to add a todo
        this.props.addTodo(this.state);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.text} />
                </form>
            </div>
        )
    }
}

export default AddTodo
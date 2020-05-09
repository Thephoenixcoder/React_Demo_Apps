import React, { Component } from 'react'

export default class AddToDo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '5px' }}>
                <input type="text" placeholder="Add Note" name="title" style={{ flex: '10' }} value={this.state.title} onChange={this.onChange} />
                <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
            </form>
        )
    }
}

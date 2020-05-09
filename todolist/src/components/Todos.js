import React, { Component } from 'react'
import Todoitems from './Todoitems'

export default class Todos extends Component {

    render() {
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
            <Todoitems todo={todo} key={todo.id} markComplete={this.props.markComplet} delTodo={this.props.delTodo} />
        ))
    }
}

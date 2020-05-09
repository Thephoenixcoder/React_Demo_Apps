import React, { Component } from 'react'

export class Todoitems extends Component {
    getStyle = () => {

        if (this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
                backgroundColor: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px dotted'
            }
        } else {
            return {
                textDecoration: 'none',
                backgroundColor: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px dotted'
            }
        }
    }


    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <h1>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} />{''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={{ backgroundColor: 'red', width: 20, height: 20, borderRadius: '100%', padding: '10px' }}>x</button>
                </h1>
            </div>
        )
    }
}

export default Todoitems

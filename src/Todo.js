import React, { Component } from 'react';
import TodoList from './TodoList'

class Todo extends Component{

    state={
        todos:[
            {id:1,content:"todo1"},
            {id:2,content:"todo2"},
            {id:3,content:"todo3"},
        ]
    }

    render(){
        return(
            <div>
                <TodoList todos={this.state.todos}></TodoList>
            </div>
        )
    }
}

export default Todo
import React, { Component } from 'react';
import TodoList from './TodoList'

class Todo extends Component{

    state={
        
        todos:[

            {id:1,content:"asdasdl"},
            {id:2,content:"sa;dm;"},
            {id:3,content:"sd;lad;lm"},
            {id:4,content:"saodnoi"},

        ]
    }


    deleteItem=(id)=>{
    
            const newList = this.state.todos.filter( (item)=> {
               
                return item.id !== id
            }
            );

        this.setState({
            todos:newList
        })
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <TodoList todos={this.state.todos} deleteItem={this.deleteItem}></TodoList>
            </div>
        )
    }
}

export default Todo
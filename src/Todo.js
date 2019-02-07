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

    addTodo=()=>{
        
        var todo = document.getElementById('todo').value;
        console.log(todo)
        var todoList = this.state.todos
        todoList.push({id:Math.random(),content:todo});
        this.setState({
            todos:todoList     
        })

    }

    render(){
        console.log(this.state);
        return(
            <div>
                <TodoList todos={this.state.todos} del={this.deleteItem}></TodoList>
                <input id="todo" type="text" placeholder="AddTodo"></input>
                <button onClick={this.addTodo}>AddTodo</button>
            </div>
        )
    }
}

export default Todo
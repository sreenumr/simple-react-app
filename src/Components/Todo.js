import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './Addtodo'
import firestore from './Firestore'
import firebase from 'firebase'

class Todo extends Component{
    state={

        todos:[
            {content:""}
        ]
    }
 

    deleteItem=(id)=>{

            const newList = this.state.todos.filter( (item)=> {
               
                return item.id !== id
            }
            );

        // this.setState({
        //     todos:newList
        // })
    }

    addTodo=(todo)=>{
        
        console.log(todo)           
        const db  = firebase.firestore();

        const todoCollection = db.collection("Todos")
        
        todoCollection.add({
            content:todo
        })
        
        //    var todoList = this.state.todos
        //    todoList.push({content:todo});
        //    this.setState({
        //    todos:todoList     
        // })

    }

    render(){
        return(
                
            <div className="container collection">
                <TodoList todos={this.state.todos} del={this.deleteItem}></TodoList>
                <AddTodo addTodo={this.addTodo}></AddTodo>
            </div>
        )
    }
}

export default Todo
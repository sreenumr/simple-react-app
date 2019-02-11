import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './Addtodo'
import firebase from 'firebase'

class Todo extends Component{


    state={
        todos:[
        ]
    }


    componentDidMount(){

        const db  = firebase.firestore();
        const todos = db.collection("Todos")
        const todoList = []
        console.log("collection")

        todos.get().then((snap)=>{
 
        (snap.forEach((element) => {todoList.push(element.data())
            }
        
        )
        
    )
    this.setState({ todos:todoList },()=>{
        console.log(this.state.todos)
    })
})

//this.state={todos:[todoList]}


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

    addTodo=(todo)=>{
        
        const db  = firebase.firestore();
        const todoCollection = db.collection("Todos")
        
        if(todo!=="")
        todoCollection.add({
            content:todo
        })
        console.log("newTodo" + todo)
    }


    render(){
        return(
            
            <div>
                <h2>Todos</h2>
                <div className="container collection">
                    <TodoList todoList={this.state.todos}/>
                    <AddTodo addTodo={this.addTodo}></AddTodo>
                </div>
            </div>
        )
    }
}

export default Todo
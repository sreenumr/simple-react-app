import React from 'react';
import './index.css'
import firebase from 'firebase'
import firestore from './Firestore'

const TodoList = ({todoList}) =>{  

  //console.log("Todos")
  // console.log(todoList)
  // console.log(todoList.length)
  console.log(todoList.length)

  const list = todoList.length?(todoList.map(todo=>{
    return(
      <div className="collection-item">
        {todo.content}
      </div>
    )
  })):(
      <div className="collection-item">No more todos</div>
  )

  return(<div>{list}</div>)

}
export default TodoList
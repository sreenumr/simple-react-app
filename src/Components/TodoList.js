import React from 'react';
import './index.css'
import firebase from 'firebase'
import firestore from './Firestore'

const TodoList = (todos) =>{  

  const list = todos.length?(todos.map(todo=>{
    return(
      <div className="collection-item">
        {todos.content}
      </div>
    )
  })):(
      <div className="collection-item">No more todos</div>
  )

  return(<div>{list}</div>)

}
export default TodoList
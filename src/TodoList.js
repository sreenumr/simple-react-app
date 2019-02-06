import React, { Component } from 'react';

const TodoList = ({todos}) =>{
  
    const list =(todos.map(todo=>{
      return (
        <div key={todo.id}>
          {todo.content}
        </div>
      )
    })
    )
  

  return (
    <h1>{list}</h1>
  )
}
export default TodoList
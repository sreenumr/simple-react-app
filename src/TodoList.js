import React, { Component } from 'react';

const TodoList = ({todos,deleteItem}) =>{  
     //console.log(props.todos);
    console.log(todos);
     const list =(todos.map( (todo)=>{
       return (
         <div key={todo.id} onClick={()=>deleteItem(todo.id)}>
           {todo.content}
         </div>
       )
     })
 )
  

  return (
     <h1>{list}</h1>
    //<h1>sjdh</h1>
  )
}
export default TodoList
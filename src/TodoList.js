import React from 'react';
import './index.css'

const TodoList = ({todos,del}) =>{  
     //console.log(props.todos);
    console.log(todos);
     const list =(todos.map( (todo)=>{
       return (
         <div className="collection-item" key={todo.id} onClick={()=>del(todo.id)}>
           {todo.content}
         </div>
       )
     })
 )
  

  return (
     <div >{list}</div>
  )
}
export default TodoList
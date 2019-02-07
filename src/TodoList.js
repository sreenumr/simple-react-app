import React from 'react';

const TodoList = ({todos,del}) =>{  
     //console.log(props.todos);
    console.log(todos);
     const list =(todos.map( (todo)=>{
       return (
         <div key={todo.id} onClick={()=>del(todo.id)}>
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
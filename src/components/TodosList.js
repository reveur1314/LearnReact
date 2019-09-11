import React from "react"
import Todo from "./Todo"
export default ({todos,handleClick}) => {
   return (
       <ul>
           {todos&&todos.map((todo,index)=>{
                return <Todo key={index} text={todo.text} complete={todo.complete} onClick={()=>{handleClick(todo.id)}}></Todo>
           })}
       </ul>
   ) 
};



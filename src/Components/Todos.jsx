import React from 'react'
import { TodoItem } from '../Components/TodoItem';

export const Todos = (props) => {
    let mystyle ={
      minHeight:"70vh",
      margin:"40px auto"
    }
  return (
    <div className="container" style={mystyle}>
      <h3 className=' my-3'> Tasks to Do</h3>
      {props.todos.length===0?"No more tasks to do":
      props.todos.map((todo)=>{
        return(
      <>
      <TodoItem todo ={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
      </>
      )
      })
       }
    </div>
  )
}

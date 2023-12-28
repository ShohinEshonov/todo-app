import React from 'react'
import Check from './Check'
import { FaTrashAlt } from "react-icons/fa";


const TodoItem = ({todo,changeTodo, removeTodo}) => {
  return (
	 <div className='flex items-center justify-between text-xl uppercase mb-4 bg-gray-800 rounded-xl p-5 max-w-2xl m-auto cursor-pointer'
	 
	 >
		<button className='flex items-center' onClick={()=>changeTodo(todo._id)}>
			<Check isCompleted={todo.isCompleted}/>
			<span className={`${todo.isCompleted?'line-through':''}`}>{todo.title}</span>
		</button>
		
		<button className='hover:text-red-700' onClick={()=>removeTodo(todo._id)}>
			<FaTrashAlt />		
		</button>
			
	 </div>
  )
}

export default TodoItem
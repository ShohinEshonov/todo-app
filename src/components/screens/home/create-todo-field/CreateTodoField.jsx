import React, { useState } from 'react'

const CreateTodoField = ({addTodo}) => {
	const [title, setTitle]= useState('')
	
	return (
	 <div className='flex items-center justify-between text-xl uppercase mb-4 border-zinc-600 border-2 rounded-xl p-5 max-w-2xl px-5 py-3 m-auto cursor-pointer'>
		<input 
		type="text" 
		onChange={e=> setTitle(e.target.value)}
		value={title}
		onKeyPress={e=>e.key==='Enter'&& addTodo(title)}
		className='bg-transparent max-w-2xl border-none outline-none w-full'
		placeholder='Enter Todo'
		/>
	 
	 </div>
  )
}

export default CreateTodoField
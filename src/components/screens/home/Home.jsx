import React, { useEffect,useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [

];

const Home = () => {
	const initialData = JSON.parse(localStorage.getItem('todos')) || [];
  	const [todos, setTodos] = useState(initialData);
	
	

	const changeTodo=(id)=>{
		const copy=[...todos]
		const current=copy.find(t=>t._id===id)
		current.isCompleted=true
		setTodos(copy)
	}

	const removeTodo=(id)=>{ 
		setTodos([...todos].filter(t=>t._id != id))
	}

	const addTodo=(title)=>{
		setTodos([
			{
				_id: new Date(),
				title,
				isCompleted:false,
			},
			...todos	,
		])
	}

	window.addTodo=addTodo

	useEffect(() => {
    // Convert the todos array to a string using JSON.stringify
    const todosString = JSON.stringify(todos);

    // Save the stringified todos in the localStorage
    localStorage.setItem('todos', todosString);
  }, [todos]); 

  return (
    <div className="w-4/5 mx-auto">
		<h1 className="text-center text-[30px] py-5 ">TODO</h1>
      {todos.map(todo => (
        <TodoItem 
		  key={todo._id} 
		  todo={todo} 
		  changeTodo={changeTodo} 
		  removeTodo={removeTodo}
		  />
      ))}
		<CreateTodoField addTodo={addTodo}/>
    </div>
  );
};

export default Home;

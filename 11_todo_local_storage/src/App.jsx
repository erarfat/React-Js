import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext'
import TodoForm from './componenets/TodoForm'
import TodoItem from './componenets/TodoItem'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo =(todo)=>{// ye value form me bhi de sake hai ... todo contain message and complete
    setTodos((prevtodos)=>([{id:Date.now(), ...todo},...prevtodos]))
  }

  const updateTodo=(id,todo)=>{
    // compe back todos.map
    setTodos((prev)=>(prev.map((value)=>(value.id === id ? todo : value))))
  }

  // const deleteTodo =(id)=>{
  //   setTodos((prev)=>(prev.map((value)=>(value.id===id ? : value ))))
  // }wrong

  const deleteTodo =(id)=>{
    setTodos((prev)=>(prev.filter((value)=>(value.id !== id))))
  }

  const toggleComplete =(id)=>{
    setTodos((prev)=>(prev.map((value)=>(value.id === id ? {...value,completed: !value.completed} : value))))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) // it will give string
    if (todos && todos.length>0) {
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])




  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
      </div>
      </TodoContextProvider>
  )
}

export default App

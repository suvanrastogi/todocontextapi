import React from 'react'
import {useState} from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    
    const [todo,setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault()


        if(!todo) return

        addTodo({todo: todo, completed:false}) //because at end todo content is a string but a whole todo is a object so we cannot  pass string we have to pass like object
        setTodo("")
    }
    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useGetTodosQuery } from '../api/apiSlice';

const TodoLists = () => {
    const [newTodo, setNewTodo] = useState('');
    const {
        data: todos, 
        isLoading, 
        isSuccess, 
        isError, 
        error
    } = useGetTodosQuery();
    console.log(todos, isLoading, isSuccess, isError, error)
    const hanldeSubmit = (e) => {
        e.preventDefault();
        //add Todo
        setNewTodo('')
    }
    const newItemSection = 
    <form onSubmit={hanldeSubmit}>
        <label htmlFor="new-todo">Enter a new todo item</label>
        <div className="new-todo">
            <input type="text" name="new-todo" id="new-todo" 
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
        </div>
        <button className='submit'> 
        <FontAwesomeIcon icon={faUpload} />
        </button>
    </form>

    let content;
    if(isLoading) {
        content= <p>Loading ...</p>
    }else if(isSuccess) {
        content= JSON.stringify(todos)
    }else if(isError) {
        content= <p>{error}</p>
    }
  return (
    <main>
        <h1>Todo List</h1>
        {newItemSection}
        {content}
    </main>
  )
}

export default TodoLists
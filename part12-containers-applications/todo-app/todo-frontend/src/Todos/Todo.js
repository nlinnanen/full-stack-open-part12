import React from 'react'

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button className='complete-btn' onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  )

  const notDoneInfo = (
    <>
      <span>
        This todo is not done
      </span>
      <span>
        <button className='delete-btn' onClick={onClickDelete(todo)}> Delete </button>
        <button className='complete-btn' onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  )


  return (
    <div className='todo' style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '70%', margin: 'auto' }}>
      <span>
        {todo.text} 
      </span>
      {todo.done ? doneInfo : notDoneInfo}
    </div>
  )
}



export default Todo
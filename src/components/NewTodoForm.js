import './NewTodoForm.css'
import React , {useState} from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../action/action'

const NewTodoForm = ({ todos , onCreatePressed}) => {

    const [inputValue , setInputValue] = useState('')
    return (
    <div className='new-todo-form'>
        <input className='new-todo-input' value={inputValue}
        onChange={e=>setInputValue(e.target.value)}
        placeholder='Type your new Todo here'
        type='text' />
        <button onClick={()=>{
            const isDuplicate = todos.some(todo => todo.text === inputValue)
           if(! isDuplicate) {
            onCreatePressed(inputValue)
            setInputValue('');

           } 
        }} className='new-todo-button'>Create Todo</button>
    </div>
    )
}

const mapStateToProp = state => ({
    todos : state.todos
})

const mapDispatchToProp = dispatch => ({
    onCreatePressed : text => dispatch(createTodo(text)),
})
export default connect(mapStateToProp,mapDispatchToProp)(NewTodoForm)
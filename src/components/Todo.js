import React from 'react';
import TodoListItem from './TodoListItem'
import './Todo.css';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo } from '../action/action';

const Todo = ({ todos = [{ text:'Hello'}] , onRemovePressed}) =>(

    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map((todo,index)=> <TodoListItem key={index} onRemovePressed={onRemovePressed} todo={todo} />)}
    </div>
)
const mapStateToProp = state => ({
    todos : state.todos
})
const mapDispatchToProp = dispatch => ({
    onRemovePressed : text => dispatch(removeTodo(text))
})
export default connect(mapStateToProp,mapDispatchToProp)(Todo);
import { CREATE_TODO,REMOVE_TODO } from "../action/action";

export const todo = (state = [], action ) =>{

    const {type, payload } = action
    switch(type){
        case CREATE_TODO: {
            const {text } = payload;
            const newTodo = {
                text,
                isCompleted:false,
            }
            //concat does not mutate array.
            return state.concat(newTodo)

        }
        case REMOVE_TODO:{
            const {text } = payload;
            return state.filter(todo => todo.text !== text)

        }
        default : return state
    }
    
}
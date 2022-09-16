import { createSlice } from "@reduxjs/toolkit"


type Todo = {
    title:string,
    completed:boolean,
    id: number
}

interface TodoState {
    todos:Todo[]
}

const initialState:TodoState = {
    todos:[]
}  

export interface addTodoType {
    payload:Todo
}

export const todoSlice = createSlice({
    name:'Todos',
    initialState,
    reducers:{
    addTodo:(state,action:addTodoType) => {
        state.todos = [...state.todos,action.payload]
    },
    deleteTodo:(state,action) => {
        state.todos = state.todos.filter(todo => todo.id != action.payload)
    }
    }
});

export const { addTodo,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
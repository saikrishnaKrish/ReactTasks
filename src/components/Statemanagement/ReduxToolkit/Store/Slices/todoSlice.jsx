import { createSlice } from "@reduxjs/toolkit";

const  TodoSlice = createSlice({
    name:"toolbox",
    initialState:{
        currentTask:"",
        todoList:["task 1","task 2"]
    },
    reducers:{
        setValue:(state,action)=>{
            state.currentTask=action.payload;
            // console.log("set value",state.currentTask)
        },
        addTask:(state,action)=>{
            
            const task=action.payload;
            if(task!==""){
                state.todoList=[...state.todoList,task];
                state.currentTask=""
            }
        }
    }
})

export const {setValue,addTask}=TodoSlice.actions;
export default TodoSlice;
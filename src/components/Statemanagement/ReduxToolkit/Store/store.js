import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/couterSlice";
import TodoSlice from "./Slices/todoSlice";

const store = configureStore({
    reducer:{
        couterState:counterSlice.reducer,
        todoState:TodoSlice.reducer
    }
})


export default store;
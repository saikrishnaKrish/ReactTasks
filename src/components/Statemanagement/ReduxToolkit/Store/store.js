import { configureStore  } from "@reduxjs/toolkit";
import counterSlice from "./Slices/couterSlice";
import TodoSlice from "./Slices/todoSlice";
import userSlice from "./Slices/userSlice";

const store = configureStore({
    reducer:{
        couterState:counterSlice.reducer,
        todoState:TodoSlice.reducer,
        userState:userSlice.reducer
    },
   
})



export default store;



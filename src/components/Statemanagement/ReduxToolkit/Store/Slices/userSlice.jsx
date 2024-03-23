import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: [],
  error: false,
  isLoading: true,
  param: null,
  userNames:["sao"]
};



export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});



const userSlice = createSlice({
  name: 'user',
  initialState:initialState,
  reducers: {
        collectUsers:(state,action)=>{
            state.userNames.push(action.payload)
        }   
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUsers.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  }
});

export const {collectUsers} = userSlice.actions;

export default userSlice



import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  user : null,
  status: 'idle',
  error: null
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    login: (state,action)=>{
      state.user = action.payload;
    },
    logout(state){
      state.user = null;
    }

  },
  
  
});



export const selectUser = (state) => state.user.user;

export const { login, logout } = userSlice.actions;

export default userSlice.reducer; 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const initialState = {
   
    users: null,
    
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
     
      pushUser(state, action) {
          if(state.users){
          state.users=[...state.users,action.payload]}
          else{
            state.users=[action.payload]
          }
      },
      pushAllUsers(state,action){
        state.users=action.payload
      }
     
    }
  })

export const {pushUser,pushAllUsers } = userSlice.actions 

export default userSlice.reducer  
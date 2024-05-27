import { createSlice } from '@reduxjs/toolkit'
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  client: localStorage.getItem("token")!== "" ? jwtDecode(localStorage.getItem("token")):""

}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload
      state.client=jwtDecode(state.token)
      console.log(jwtDecode(state.token).clientType);
      localStorage.setItem("token", state.token);
    },
    logout: (state) => {
      state.token = "";
      state.client="";
      localStorage.setItem("token", state.token);
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
const state = {
	id: "",
	token: "",
	email: "",
	firstName: "",
	lastName: "",
}

export const userSlice = createSlice({
	name: "user",
	initialState: state,
	reducers: {
		updateUser: (state, action) => {
			state = { ...state, ...action.payload }
			return state
		},
		deleteUser: (state, action) =>{
			state = {}
			return state
		}
	}
})
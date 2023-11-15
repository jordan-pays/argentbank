import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../reducers";

export const { updateUser, deleteUser } = userSlice.actions

export const store = configureStore({
	reducer: {
		user: userSlice.reducer
	}
});
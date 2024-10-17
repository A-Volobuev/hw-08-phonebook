import { createSlice } from "@reduxjs/toolkit";
import {authOperations} from './authOperations';

//! Начальное состояние логина
const initialState = {
	user: {name: 'null', email: null},
	token: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: (builder) => {
    builder
	// .addCase(authOperations.register.fulfilled, (state, action) => {
	// 	state.user = action.payload.user;
	// 	state.token = action.payload.token;
	// 	state.isLoggedIn = true;
	// })
	.addCase(authOperations.register.fulfilled, (state, action) => {
		state.user = action.meta.arg;
		console.log(action);
		state.token = action.payload.token;
		state.isLoggedIn = true;
	})
	// .addCase(authOperations.logIn.fulfilled, (state, action) => {
	// 	console.log(action)
	// 	state.user = action.payload.user;
	// 	state.token = action.payload.token;
	// 	state.isLoggedIn = true;
	// })
	.addCase(authOperations.logIn.fulfilled, (state, action) => {
		// console.log('before', state.user)
		state.user = action.meta.arg;
		// console.log('after', state.user)
		state.token = action.payload.token;
		state.isLoggedIn = true;
	})
	.addCase(authOperations.logOut.fulfilled, (state, action) => {
		state.user = {name: null, email: null};
		state.token = null;
		state.isLoggedIn = false;
	})
	// .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
	// 	state.user = {... action.payload};
	// 	state.isLoggedIn = true;
	// })
	}
});

export const authReducer = authSlice.reducer;

//! Селекторы
	//? Залогинен ли пользователь? 
export const getIsLoggedIn = state => state.auth.isLoggedIn;
	//? Получить имя юзера
export const getUsername = state => state.auth.user.name;
export const getUserEmail = state => state.auth.user.email;


//!!!При сабмите формы registr
// dispatch(authOperations.registr({name,email,password}));

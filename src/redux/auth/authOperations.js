import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = 'https://reqres.in/api';

const token = {
  set(token) {
		console.log(axios.defaults)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
		console.log(axios.defaults)
    axios.defaults.headers.common.Authorization = '';
  }
};


// const register = createAsyncThunk('auth/register', async credentials => {
// 	try {
// 		const {data} = await axios.post('/user/signup', credentials);
// 		token.set(data.token);
// 		return data;
// 	} catch (error) {

// 	}
// })

const register = createAsyncThunk('auth/register', async credentials => {
	try {
		const {data} = await axios.post('https://reqres.in/api/register', credentials);
		token.set(data.token);
		return data;
	} catch (error) {

	}
})


// const logIn = createAsyncThunk('auth/login', async credentials => {
// 	try{ 
// 		const {data} = await axios.post('/user/login', credentials);
// 		token.set(data.token);
// 		return data;
// 	} catch (error) {

// 	}
// })

const logIn = createAsyncThunk('auth/login', async credentials => {
	try{ 
		const {data} = await axios.post('https://reqres.in/api/login', credentials);
		console.log("data",data)
		token.set(data.token);
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
})

// const logOut = createAsyncThunk('auth/logout', async () => {
// 	try{
// 		await axios.post('/user/logut');
// 		token.unset();
// 	} catch (error) {

// 	}
// })
const logOut = createAsyncThunk('auth/logout', async () => {
	try{
		await axios.post('https://reqres.in/api/logut');
		token.unset();
	} catch (error) {
		console.log(error);
	}
})

const fetchCurrentUser  = createAsyncThunk(
	'auth/refresh', 
	async (_, thunkAPI) => {
	console.log(thunkAPI.getState());
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	console.log(token)

	if(token === null) {
		return;
	}
	token.set(persistedToken);
	// try{
	// 	const {data} = await axios.get('/user/current');
	// 	console.log(data)
	// return data;
	// } catch(error) {
	// 	console.log(error);
	// }
}) 

export const authOperations = {
	register,
	logIn,
	logOut,
	fetchCurrentUser
};
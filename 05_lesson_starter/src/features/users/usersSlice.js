// usersSlice.js allows us to access the users from the store. It is called a slice because it is a collection of reducers which is part of Redux. Slices are used to manage a specific part of the state (users in this case). State is the application's data.
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) => // this is a selector that returns the user with the given id
    state.users.find(user => user.id === userId); // returns the user with the given id

export default usersSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';

// a store is a collection of reducers. reducers are functions that take in a state and an action and return a new state
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})
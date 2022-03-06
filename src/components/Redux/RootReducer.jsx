import React from 'react'
import { combineReducers } from 'redux'
import { postsReducer } from './StoreBooks';

const RootReducer = combineReducers({
    posts: postsReducer
})

export default RootReducer
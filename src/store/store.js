import React from 'react'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import slice from './slice'


const rootReducer = combineReducers({
    reducer: slice
})


export const store = configureStore({
    reducer: rootReducer
})

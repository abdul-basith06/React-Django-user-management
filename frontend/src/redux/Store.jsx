import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Authcontext'

export const store= configureStore({
    reducer:{
        auth:authReducer
    }
})
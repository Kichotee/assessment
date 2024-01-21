import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {userSlice} from './user/userSlice'


const rootReducer=combineReducers({
    user:userSlice.reducer
})

export const makeStore=()=>{
        return configureStore({
            reducer:rootReducer
        })
}

export type AppStore= ReturnType<typeof makeStore>

export type RootState=ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
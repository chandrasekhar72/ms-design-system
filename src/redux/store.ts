import { configureStore } from '@reduxjs/toolkit'
import AuthSlices from './slices/AuthSlice'

const store = configureStore({
    reducer: {
        authReducer: AuthSlices,
    }
})

export default store
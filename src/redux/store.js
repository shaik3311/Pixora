import {configureStore} from '@reduxjs/toolkit'
import resultSlice from '../features/resultSlice'
export const store = configureStore({
    reducer : {
        search : resultSlice
    }
})
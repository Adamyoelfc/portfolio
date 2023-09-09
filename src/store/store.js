import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from './aboutSlice'

export default configureStore({
    reducer: {
        aboutInside: aboutReducer
    }
})
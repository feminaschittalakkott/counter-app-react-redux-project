import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer: {
        counterRedcucer: counterSlice
    }
})


export default store
import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./features";

export const store = configureStore({
    reducer:{
        todos:todoSlice.reducer
    }
});


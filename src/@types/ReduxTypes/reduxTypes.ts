import { store } from "../../redux/store";

//Types for redux 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
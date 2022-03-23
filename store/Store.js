import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './Slice';
import TimerReducer from "./TimerSlice";


const store = configureStore(
    { reducer: { ui: uiReducer, timer: TimerReducer }});

export default store;
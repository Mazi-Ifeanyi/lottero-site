import { createSlice } from '@reduxjs/toolkit';

const timerSlice = createSlice({
    name: 'timer',
    initialState: { hour: 59, mins: 60, sec: 59},
    reducers: {
        setTimer(state, action){
           const item = action.payload;
           state.hour = item.hour;
           state.mins = item.mins;
           state.sec = item.sec;
        }
    }
});

export const { setTimer } = timerSlice.actions;
export default timerSlice.reducer;
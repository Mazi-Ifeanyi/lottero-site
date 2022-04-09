import { configureStore } from "@reduxjs/toolkit";
import LotteroReducer from './LotteroSlice';
import PlayerSlice from "./PlayerSlice";

const store = configureStore(
    { reducer: { lottero: LotteroReducer, players: PlayerSlice }});

export default store;
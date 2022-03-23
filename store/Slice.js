import { createSlice } from '@reduxjs/toolkit';



const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      bnbLiquidity: 0,
      burntSupply: 0,
      circSupply: 0,
      close: "--",
      contractAddress: "--",
      tokenDollarPrice: 0,
      bnbPrice: 0,
      gameFee: 0,
      mcap: 0,
      players: 0,
      prizePot: 0,
      tokenLiquidity: 0,
      tokenName: "--",
      totalSupply: 0
    },
    reducers: {
        saveLotteroData(state, action) {
           const items = action.payload;
           state.bnbLiquidity = items.bnb_liquidity;
           state.burntSupply = items.burnt_supply;
           state.circSupply = items.circ_supply;
           state.close = items.close;
           state.contractAddress = items.contract_address;
           state.tokenDollarPrice = items.token_dollar_price;
           state.bnbPrice = items.bnb_price;
           state.gameFee = items.game_fee;
           state.mcap = items.mcap;
           state.players = items.players;
           state.prizePot = items.prize_pot;
           state.tokenLiquidity = items.token_liquidity;
           state.tokenName = items.token_name;
           state.totalSupply = items.total_supply;
        }, 
    }
});


export const { saveLotteroData } = uiSlice.actions;
export default uiSlice.reducer;

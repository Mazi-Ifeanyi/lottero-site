import { createSlice } from '@reduxjs/toolkit';



const LotteroSlice = createSlice({
    name: 'ui',
    initialState: {
      bnbLiquidity: 0,
      burntSupply: 0,
      circSupply: 0,
      drawTime: "--",
      contractAddress: "--",
      tokenDollarPrice: 0,
      bnbPrice: 0,
      lotteryId: '--',
      mcap: 0,
      players: 0,
      roi: '--',
      tokenLiquidity: 0,
      tokenName: "--",
      totalSupply: 0,
      minStake: 0,
      maxStake: 0,
      wallet: '--',
      symbol: '--'
    },
    reducers: {
        saveLotteroData(state, action) {
           const items = action.payload;
           state.bnbLiquidity = items.bnb_liquidity;
           state.burntSupply = items.burnt_supply;
           state.circSupply = items.circ_supply;
           state.drawTime = items.draw_time;
           state.contractAddress = items.contract_address;
           state.tokenDollarPrice = items.token_dollar_price;
           state.bnbPrice = items.bnb_price;
           state.lotteryId = items.lottery_id;
           state.mcap = items.mcap;
           state.players = items.players;
           state.roi = items.roi;
           state.tokenLiquidity = items.token_liquidity;
           state.tokenName = items.token_name;
           state.totalSupply = items.total_supply;
           state.minStake = items.min_stake;
           state.maxStake = items.max_stake;
           state.wallet = items.wallet;
           state.symbol = items.symbol;
        }, 
    }
});


export const { saveLotteroData } = LotteroSlice.actions;
export default LotteroSlice.reducer;

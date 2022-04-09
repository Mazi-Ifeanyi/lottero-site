

export const isNull = (arg) =>{
    if(arg === undefined) return true;
    if(arg === null) return true;
    if(arg.length === 0) return true;
    if(arg === '--') return true;
    return false;
}


export const parseServerResponse = (obj) =>{
    if(isNull(obj.bnb_liquidity)) obj.bnb_liquidity = 0; 
    if(isNull(obj.bnb_price)) obj.bnb_price = 0; 
    if(isNull(obj.burnt_supply)) obj.burnt_supply = 0; 
    if(isNull(obj.circ_supply)) obj.circ_supply = 0; 
    if(isNull(obj.contract_address) || obj.contract_address === 0) obj.contract_address = '--'; 
    if(isNull(obj.draw_time) || obj.draw_time === 0) obj.draw_time = '--'; 
    if(isNull(obj.lottery_id) || obj.lottery_id === 0) obj.lottery_id = '--'; 
    if(isNull(obj.max_stake)) obj.max_stake = 0; 
    if(isNull(obj.mcap)) obj.mcap = 0; 
    if(isNull(obj.min_stake)) obj.min_stake = 0; 
    if(isNull(obj.players)) obj.players = 0; 
    if(isNull(obj.roi)) obj.roi = 0; 
    if(isNull(obj.symbol) || obj.symbol === 0) obj.symbol = '--'; 
    if(isNull(obj.token_dollar_price)) obj.token_dollar_price = 0; 
    if(isNull(obj.token_liquidity)) obj.token_liquidity = 0; 
    if(isNull(obj.token_name) || obj.token_name === 0) obj.token_name = '--'; 
    if(isNull(obj.total_supply)) obj.total_supply = 0; 
    if(isNull(obj.wallet)) obj.wallet = 0; 

    return obj;
}
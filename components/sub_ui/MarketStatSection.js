import classes from './MarketStatSection.module.css';

import React from 'react';
import { useSelector } from 'react-redux';

const MarketStatSection = () => {
   const selector = useSelector(state => state.ui);
   let mcap = selector.mcap.toFixed(0);
   const tokenPrice = '$'+selector.tokenDollarPrice.toFixed(8);
   const bnbPrice = '$'+selector.bnbPrice.toFixed(8);
   let liquidityTokens = selector.tokenLiquidity.toFixed(3);
   const bnbLiquidity = selector.bnbLiquidity.toFixed(2)+' BNB';

   var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0, 
      });

      try{
      mcap = formatter.format(mcap); 
      liquidityTokens = formatter.format(liquidityTokens).replace('$','')+' LTO';
      }catch(err){}


   return (
      <main className={classes.parent} id='market-stat'>
         <div>
            <h1 className={classes.h1Tag}>Lottero Market Stat</h1>
         </div>
         <div className={classes.sections}>
            <section className={classes.firstSection}>
               <h2 className={classes.leftPara}>Lto Mcap:</h2>
               <p className={classes.rightPara}>{mcap}</p>
            </section>
            <section className={classes.firstSection}>
               <h2 className={classes.leftPara}>Lto Price</h2>
               <p className={classes.rightPara}>{tokenPrice}</p>
            </section>
            <section className={classes.firstSection}>
               <h2 className={classes.leftPara}>Price in BNB</h2>
               <p className={classes.rightPara}>{bnbPrice}</p>
            </section>
            <section className={classes.firstSection}>
               <h2 className={classes.leftPara}>LP Tokens</h2>
               <p className={classes.rightPara}>{liquidityTokens}</p>
            </section>
            <section className={classes.firstSection}>
               <h2 className={classes.leftPara}>LP BNB</h2>
               <p className={classes.rightPara}>{bnbLiquidity}</p>
            </section>
         </div>
      </main>
   );
}

export default React.memo(MarketStatSection);
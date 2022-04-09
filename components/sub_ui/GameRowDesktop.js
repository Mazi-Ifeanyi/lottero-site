import classes from './GameRowDesktop.module.css';
import React from 'react';

const GameRowDesktop = ({ colorType, keys, from, guess, entry, stake, roi, symbol, price, bsc_link }) =>{
     let color;
     if(colorType % 2 === 0){
         color = 'transparent';
     }

     price = price.replace('$', '');
     from = from.slice(0,3) +'...'+ from.slice(-3);
     roi = (roi * stake * price).toFixed(2);

    //console.log(keys)
     const openBscScanHandler = () =>{
       window.open(bsc_link);
     }

     return (
        <div className={classes.row} style={{backgroundColor: color}} key={keys} onClick={openBscScanHandler}>
          <div>{from}</div>
          <div>{guess}</div>
          <div>{entry}</div>
          <div className={classes.stakeText} style={{justifyContent: 'flex-start', paddingLeft: '45px'}}>{stake}</div>
          <div>{`$${roi}`}</div>
      </div>
    )
}

export default React.memo(GameRowDesktop, (prevProps, nextProps)=>{
    if(prevProps.keys === nextProps.keys) return true;
    else return false;
});
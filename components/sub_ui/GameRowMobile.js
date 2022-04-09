import classes from './GameRowMobile.module.css';
import React, { useState } from 'react';

const GameRowMobile = ({ colorType, keys, from, guess, entry, stake, roi, symbol, price, bsc_link }) =>{
    const [dropDown, setDropDown] = useState(false);
    let color;
     if(colorType % 2 === 0){
         color = 'transparent';
     }



     price = price.replace('$', '');
     from = from.slice(0,3) +'...'+ from.slice(-3);
     roi = (roi * stake * price).toFixed(2);

    const dropDownHandler = () =>{
        setDropDown(prevState => !prevState);
    }

    const openBscScanHandler = () =>{
        window.open(bsc_link);
      }

    return (
        <div className={classes.row} onClick={dropDownHandler} style={{backgroundColor: color}} key={keys}>
        <div>{from}</div>
        <div>{guess}</div>
        <div>{entry}</div>
        <div className={classes.stakeText} style={{justifyContent: 'center', paddingLeft: '0px'}}>{stake}</div>
        {dropDown &&<div className={classes.roi}>
            <div className={classes.leftDiv}>
               <p>ROI</p>
               {`$${roi}`}
            </div>
            <div className={classes.rightDiv}>
                <button className={classes.openBscBtn} onClick={openBscScanHandler}>open bscscan</button>
            </div>
        </div>}
    </div>
    )
}

export default React.memo(GameRowMobile, (prevProps, nextProps)=>{
    if(prevProps.keys === nextProps.keys) return true;
    else return false;
});
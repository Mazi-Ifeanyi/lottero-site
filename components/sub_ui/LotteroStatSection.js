import classes from './LotteroStatSection.module.css';
import image from '../../assets/chart_bar.png';

import React from 'react';
import { useSelector } from 'react-redux';


const LotteroStatSection = () => {
    const selector = useSelector(state => state.lottero);
    let totalSupply =  selector.totalSupply.toFixed(0);
    let circSupply = selector.circSupply.toFixed(0);
    let burntSupply = selector.burntSupply.toFixed(0);

    var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0, 
        });

        try{
        totalSupply = formatter.format(totalSupply).replace('$',''); 
        circSupply = formatter.format(circSupply).replace('$',''); 
        burntSupply = formatter.format(burntSupply).replace('$',''); 
        }catch(err){}

 const openBscscanHandler = () =>{
     window.open('https://bscscan.com/token/0x3a83e8b8c9e447c2e90e6e036eac8624d883f5fc');
  }



    return <main className={classes.parent} id='lottero-stat'>
        <section className={classes.leftSection}>
            <h1>Lottero Stats</h1>
            <article className={classes.mainBox}>
                <div>
                    <p className={classes.leftPara}>LTO Total Supply:</p>
                    <p className={classes.rightPara}>{totalSupply}</p>
                </div>
                <div>
                    <p className={classes.leftPara}>LTO Circ Supply:</p>
                    <p className={classes.rightPara}>{circSupply}</p>
                </div>
                <div>
                    <p className={classes.leftPara}>Total burned:</p>
                    <p className={classes.rightPara}>{burntSupply}</p>
                </div>
                <div className={classes.btnContainer}>
                    <button className={classes.openBscBtn} onClick={openBscscanHandler}>Open bscscan</button>
                </div>
            </article>
        </section>
        <section className={classes.rightSection}>
            <img src={image} alt='' />

        </section>
    </main>
}

export default LotteroStatSection;
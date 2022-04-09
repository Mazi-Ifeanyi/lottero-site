import React, { useState, useRef, useEffect } from 'react';
import classes from './GameStatSection.module.css';
import image from '../../assets/chart_pie.png';
import Popup from '../UI/Popup';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';



const scrollToRef = (ref)=>{
    window.scrollTo(0, ref.current.offsetTop);
  }



const GameStatSection = ({ width }) =>{
    const [showPopup, setShowPopup] = useState(false);
  const selector = useSelector(state => state.lottero);
  const players = selector.players;
  const lotteryId = selector.lotteryId;
  const roi = selector.roi;
  const drawTime =  selector.drawTime+' UTC';
  const [searchParams, setSearchParams] = useSearchParams();
  const myRef = useRef(null);

  useEffect(()=>{
      const obj = Object.fromEntries([...searchParams]);
      //console.log(object);
      if(obj.rules === 1) scrollToRef(myRef);

      //setSearchParams({rules: 1});
  },[]);

  const joinLotteryHandler = () =>{
      window.open('https://t.me/lotterofinancebot');
    //   setShowPopup(true);
    //   const timer = setTimeout(()=>{
    //       setShowPopup(false);
    //   },2000);

    //   return () => clearTimeout(timer);
  }
    return(
        <main className={classes.parent} id='game-stat' ref={myRef}>
             {showPopup && <Popup width={width} text={`There is no current game at the moment. Stay tuned`} />}
            <div>
               <h1 className={classes.h1Tag}>Game Stat</h1>
           </div>
           <span className={classes.sections}>
            <section className={classes.leftSection}>
            {/* <p>Join our Lottery with 0.008BNB and stand a chance to win over 125000% ROI. You don't need to connect your wallet. Just play with our Lottery Bot.</p> */}
            <p>Make passive income from Lottero.<br/>Stake between $1 - $10 and guess two numbers from 50 & 100.<br/>At draw time, our Smart Contract will generate its own lucky number. If it's the same with your guess you win.<br/>Make between 200% to 4000%. Stake with up to 100x ROI</p>
            <table className={classes.table}>
            <colgroup>
                    <col className={classes.firstCol} />
                    <col className={classes.secCol} />
                    <col className={classes.firstCol} />
                    <col className={classes.secCol} />
                </colgroup>
                <thead className={classes.thead}>
                    <tr>
                      <td>Players</td>
                      <td>Lottery ID</td>
                      <td>ROI</td>
                      <td>Draw time</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>{players}</td>
                       <td>{lotteryId}</td>
                       <td>{roi}</td>
                       <td>{drawTime}</td>
                    </tr>
                </tbody> 
                </table>
                <h2 className={classes.rulesPara}>Game Rules</h2>
                <ul className={classes['unordered-list']}>
                {/* <li>Maximum of 15 entries are allowed for a particular user and wallet only</li> */}
                <li>Payment must be done in Lottero tokens</li>
                <li>Do not send an amount below the min stake or above the max stake.</li>
                <li>You cannot request for a refund after staking in the lottery.</li>
                {/* <li>Do not spam the MoneyMaker lottery bot.</li> */}
                <li>After staking in the lottery, ensure to talk to the LotteroFinanceBot or forfeit it after the draw time.</li>
                <li>Do not start the lottery with the same transaction hash more than once.</li>
                <li>Do not stake before the lottery begins or after draw time, else you forfeit it.</li>
                </ul>
            </section>
            <section className={classes.rightSection}>
               <img src={image} alt='' />
               <button onClick={joinLotteryHandler}>Join Lottery</button>
            </section>
            </span>
        </main>
    );
}

export default GameStatSection;
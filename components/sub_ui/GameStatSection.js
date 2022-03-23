import React, { useState } from 'react';
import classes from './GameStatSection.module.css';
import image from '../../assets/chart_pie.png';
import Popup from '../UI/Popup';
import { useSelector } from 'react-redux';

const GameStatSection = ({ width }) =>{
    const [showPopup, setShowPopup] = useState(false);
  const selector = useSelector(state => state.ui);
  const players = selector.players;
  const gameFee = '$'+selector.gameFee;
  const prizePot = '$'+selector.prizePot;
  const close =  selector.close+' UTC';



  const joinGameHandler = () =>{
      setShowPopup(true);
      const timer = setTimeout(()=>{
          setShowPopup(false);
      },2000);

      return () => clearTimeout(timer);
  }
    return(
        <main className={classes.parent} id='game-stat'>
             {showPopup && <Popup width={width} text={`There is no current game at the moment. Stay tuned`} />}
            <div>
               <h1 className={classes.h1Tag}>Game Stat</h1>
           </div>
           <span className={classes.sections}>
            <section className={classes.leftSection}>
            <p>Join our Lottery with 0.008BNB and stand a chance to win over 125000% ROI. You don't need to connect your wallet. Just play with our Lottery Bot.</p>
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
                      <td>Total Fee</td>
                      <td>Prize Pot</td>
                      <td>Close</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td>{players}</td>
                       <td>{gameFee}</td>
                       <td>{prizePot}</td>
                       <td>{close}</td>
                    </tr>
                </tbody> 
                </table>
                <h2 className={classes.rulesPara}>Game Rules</h2>
                <ul className={classes['unordered-list']}>
                <li>Maximum of 15 entries are allowed for a particular user and wallet only</li>
                <li>Payment must be done in Lottero tokens</li>
                <li>Do not send an amount below the game fee. Send the exact amount of Lottero tokens as instructed by the MoneyMaker or forfeit the game.</li>
                <li>You cannot request for a refund after paying game fee or entering the Lottery.</li>
                <li>Do not spam the MoneyMaker lottery bot.</li>
                <li>After paying game fee, please ensure to talk to the MoneyMaker lottery bot and place your game or forfeit it once the session has expired</li>
                <li>Do not enter the game with the same transaction hash more than once.</li>
                <li>Do not pay or transfer game fee before the game begins or you forfeit it</li>
                </ul>
            </section>
            <section className={classes.rightSection}>
               <img src={image} alt='' />
               <button onClick={joinGameHandler}>Join Game</button>
            </section>
            </span>
        </main>
    );
}

export default React.memo(GameStatSection);
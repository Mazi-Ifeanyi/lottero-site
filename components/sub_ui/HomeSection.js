import classes from './HomeSection.module.css';
import image from '../../assets/balls.png';
import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/use-axios';


let days;
let hour;
let mins;
let sec;


const HomeSection = () =>{
   const [timer, setTimer] = useState();
   const { sendGetRequest } = useAxios()

   useEffect(()=>{
      const url = 'https://lottero.finance/countdown';
      sendGetRequest(url, function(resData){
         days = resData.days;
         hour = resData.hour;
         mins = resData.mins;
         sec = resData.sec;
      });

   },[sendGetRequest]);

   useEffect(() =>{
       const interval = setInterval(() => {
         if(+sec > 0){
           sec = sec -1;
           if(sec < 10) sec = '0'+sec;
         }else{
           sec = 59;
           if(+mins > 0){
               mins = mins - 1;
               if(mins < 10) mins = '0'+mins;
           }else{
                mins = 59;
                if(+hour > 0){
                   hour = hour -1;
                   if(hour < 10) hour = '0'+hour;
               }else{
                   hour = 24;
                   if(+days > 0){
                       days = days -1;
                   }else{
                       
                   }
               }
           }
         }
         setTimer({days: days, hour: hour, mins: mins, sec: sec});
       }, 1000);

      return ()=> clearInterval(interval);
   },[timer]);



   return(
      <main className={classes.parent} id='home-section'>
          <section className={classes.leftSection}>
             <h1>Empower yourself with Lottero <b className={classes.moneyText}>MoneyMaker.</b></h1>
 <p>We aim to provide a fair and consistent opportunity for all lovers of crypto and lottery to stand a chance of making real gains.</p>
     <span className={classes.timerParent}>
        <h2>Lottero will be launched in {days} days</h2>
        <div className={classes.timerContainer}>
          <div>
             <p>{hour}</p>
          </div>
          <p>:</p>
          <div>
             <p>{mins}</p>
          </div>
          <p>:</p>
          <div>
             <p>{sec}</p>
          </div>
          </div>
          <div className={classes.timeText}>
             <div>
                <p>Hour</p>
             </div>
             <div>
                <p>Minute</p>
             </div>
             <div>
                <p>Seconds</p>
             </div>
          </div>
     </span>
          </section>
          <section className={classes.rightSection}>
          <img src={image} alt='' />

          </section>
      </main>
   );
}

export default React.memo(HomeSection);
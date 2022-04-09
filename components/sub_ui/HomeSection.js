import classes from './HomeSection.module.css';
import image from '../../assets/balls.png';
import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/use-axios';
import { useDispatch } from 'react-redux';
import { saveLotteroData } from '../../store/LotteroSlice';
import { isNull, parseServerResponse } from '../../util/Util';
import LoadingUI from '../UI/LoadingUI';
import axios from 'axios';

let days;
let hour;
let mins;
let sec;


const HomeSection = () =>{
   const [timer, setTimer] = useState();
   const { sendGetRequest, isLoading } = useAxios()
   const dispatch = useDispatch();
   //const [ hideTimer, setHideTimer ] = useState(false);

     
   useEffect(()=>{
      //  const url = 'http://192.168.43.188:4000/market';
      const url = 'https://lottero.finance/market';
      const params = {
         ca: '0x3A83E8B8C9E447C2E90e6e036EAC8624D883f5FC'
      }
     
       sendGetRequest(url, params, function(resData){
          if(!isNull(resData)){
              const obj = parseServerResponse(resData);
              dispatch(saveLotteroData(obj));
            //   console.log('i got data from server and this is mAINUI useEFFECT', resData);
          }
       });
   },[sendGetRequest, dispatch]);


   
useEffect(()=>{
     const interval = setInterval(async()=>{
     // console.log(' i am in the interval');
   
         try{
         //   const url = 'http://192.168.43.188:4000/market';
            const url = 'https://lottero.finance/market';
             const params = {
                 ca: '0x3A83E8B8C9E447C2E90e6e036EAC8624D883f5FC'
             }
           const response = await axios.get(url, {headers:{'Content-Type' : 'application/json'}, timeout: 60000, params: params });
           const status = response.status;
           const data = response.data;
       if(status === 200 || status === 304){
              if(!isNull(data)){
               const obj = parseServerResponse(data);
               dispatch(saveLotteroData(obj));
              }
         }
         }catch(err){}
      }, 15000);
     
     return ()=> clearInterval(interval);
   },[dispatch]);

   
   useEffect(()=>{
      const url = 'https://lottero.finance/countdown';
      // const url = 'http://192.168.43.188:4000/countdown';
      const params = {};
      sendGetRequest(url, params, function(resData, resolved){
         //console.log(resolved);
          if(!resolved){
            // console.log('i entered here')
            // setHideTimer(true);
         }else{
            days = resData.days;
            hour = resData.hour;
            mins = resData.mins;
            sec = resData.sec;
            // if(+days <= 0) setHideTimer(true);
         }
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
                   { isLoading && <LoadingUI />}
          <section className={classes.leftSection}>
             <h1>Empower yourself with Lottero <b className={classes.moneyText}>MoneyMaker.</b></h1>
 <p>We aim to provide a fair and consistent opportunity for all lovers of crypto and lottery to stand a chance of making real gains.</p>
   {/*!hideTimer &&<span className={classes.timerParent}>
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
   </span>*/}
          </section>
          <section className={classes.rightSection}>
          <img src={image} alt='' />

          </section>
      </main>
   );
}

export default HomeSection;
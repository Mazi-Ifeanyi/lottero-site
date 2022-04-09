import classes from './PlayersRoute.module.css';
import React, { useLayoutEffect, useEffect, useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



import GameRowMobile from '../components/sub_ui/GameRowMobile';
import GameRowDesktop from '../components/sub_ui/GameRowDesktop';
import LoadingUI from '../components/UI/LoadingUI';
import useAxios from '../hooks/use-axios';
import PlayLoader from '../components/UI/PlayLoader';
import { isNull, parseServerResponse } from '../util/Util';
import { savePlayerData } from '../store/PlayerSlice';



import trophyIcon from '../assets/trophy_icon.png';
import shieldIcon from '../assets/shield_icon.png';


function useWindowSize(){
   const [size, setSize] = useState([]);

   useLayoutEffect(()=>{
       function updateSize(){
          setSize([window.innerWidth, window.height]);
       }
       updateSize();
       window.addEventListener('resize', updateSize);

       return () => window.removeEventListener('resize', updateSize);
   },[]);

   return size;
}


let array = [];
let price,mcap, bnbLp, tokenName, symbol, totalSupply, circSupply, totalPlayers, drawTime, minStake, maxStake, roi, contractAddress;

const PlayersList = () =>{
   const [width] = useWindowSize();
   const { sendGetRequest, isLoading, error } = useAxios();
   const ref = useRef();
   const [ playersArray, setPlayersArray] = useState([]);
   const [ gameId, setGameId] = useState('');
   const [ lastCount, setLastCount] = useState(0);
   const [ arrayEmpty, setArrayEmpty ] = useState(false);
   const [ isLoadingPlayers, setIsLoadingPlayers] = useState(false);
   const urlParams = useParams();
   const dispatch = useDispatch()
   const navigate = useNavigate();


   const selector = useSelector(state=> state.players);
      price = '$'+selector.tokenDollarPrice.toFixed(8);
      mcap = selector.mcap.toFixed(0);
      bnbLp = selector.bnbLiquidity.toFixed(2)+' BNB';
      tokenName = selector.tokenName;
      symbol = selector.symbol.toUpperCase();
      totalSupply = selector.totalSupply;
      circSupply = selector.circSupply;
      totalPlayers = selector.players;
      drawTime = selector.drawTime;
      minStake = selector.minStake;
      maxStake = selector.maxStake;
      roi = selector.roi;
      // gameId = selector.lotteryId; 
      contractAddress = selector.contractAddress;
  

   var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0, 
      });

      try{
      mcap = formatter.format(mcap); 
      }catch(err){}


      const fetchPlayers =useCallback((gameId) =>{
         // const url = 'http://192.168.43.188:4000/players';
         const url = 'https://lottero.finance/players';
         const params = {
            gameId: gameId,
            last_count: lastCount,
           }

        sendGetRequest(url, params, function(resData, resolved){
          // console.log('i have gotten players', resData);
           if(!isNull(resData)){
              for(let i = 0; i < resData.length; i++){
                 resData[i].index = array.length+1;
                 array.push(resData[i]);
              }
               //console.log('Array 1', array);
               setPlayersArray(array);
               setLastCount(array.length);
              if(array.length === 0){
                   setArrayEmpty(true);
              }else{
                 setArrayEmpty(false);
              }
           }else{
           }
        });
      },[lastCount, sendGetRequest]);
      
      const fetchMarketData = useCallback(async() =>{
         // const url = 'http://192.168.43.188:4000/market';
         const url = 'https://lottero.finance/market';
         const params = {
            ca: urlParams.ca
         }

          sendGetRequest(url, params, function(resData, resolved){
            console.log('i have fetched maret data ', resData);
             if(!isNull(resData)){
               const obj = parseServerResponse(resData);
               dispatch(savePlayerData(obj));
               let gameId = obj.lottery_id;
               fetchPlayers(gameId);
               setGameId(gameId);
             }
          });
      },[dispatch, fetchPlayers, sendGetRequest, urlParams.ca]);


      useEffect(() =>{
         array = [];
         window.scrollTo(0, 0);
         if(isNull(urlParams.ca)){
            navigate('0x3A83E8B8C9E447C2E90e6e036EAC8624D883f5FC');
         }else{
            fetchMarketData();         
         }
      },[navigate, urlParams.ca]);


      const fetchMorePlayers = async() =>{
          //console.log('i ran');
         try{
         // const url = 'http://192.168.43.188:4000/players';
         const url = 'https://lottero.finance/players';
      
         const params = { gameId: gameId, last_count: lastCount };
         setIsLoadingPlayers(true);
         const response = await axios.get(url, {headers:{'Content-Type' : 'application/json'}, timeout: 60000, params: params });
            const status = response.status;
               const data = response.data;
                if(status === 200 || status === 304){
                  if(data.length > 0){
                     for(let i = 0; i < data.length; i++){
                        data[i].index = array.length+1;
                        array.push(data[i]);
                     }
                     //console.log('Array ', array);
                      setPlayersArray(array);
                      setLastCount(array.length);
                      if(array.length === 0){
                        setArrayEmpty(true);
                   }else{
                       setArrayEmpty(false);
                   }
                  }
               }
               setIsLoadingPlayers(false);

                  }catch(err){
                setIsLoadingPlayers(false);

                  }
        } 


        const joinLotteryHandler = () =>{
         window.open('https://t.me/lotterofinancebot');
 
     }


   const onScrollHandler = () =>{
    if(ref.current){
      //  console.log(ref.current)
       const { scrollTop, scrollHeight, clientHeight } = ref.current;
       if(scrollTop + clientHeight === scrollHeight){
          console.log('reached bottom');
          fetchMorePlayers();
       }
    }
   }


   let errorMsg;
   if(arrayEmpty || array.length === 0){
      errorMsg = <p style={{color: '#fff', margin: 'auto', textAlign: 'center'}}>There is no active draw at the moment, check later.</p>;
   }
   if(error === 'timeout'){
      errorMsg = <p style={{color: '#fff', margin: 'auto', textAlign: 'center'}}>Response timed out. Try again later!</p>;
   }else if(error){
       errorMsg = <p style={{color: '#fff', margin: 'auto', textAlign: 'center'}}>An error occured, Try again later!</p>;
    }
 

   const showIfGreaterThan768 =  (<span className={classes.leaderContainer}>
   <nav className={classes.top}>
      <div>From</div>
      <div>Guess</div>
      <div>Entry</div>
      <div>Stake</div>
      <div>ROI</div>
   </nav>
   <nav className={classes.contentContainer} ref={ref} onScroll={onScrollHandler}>
        {errorMsg}
      {playersArray.map(player=>(
         <GameRowDesktop 
               keys={player.index}
               colorType={player.index}
               from={player.from}
               guess={player.guess}
               entry={player.myEntryCount}
               stake={player.value}
               roi={player.roi}
               symbol={player.symbol}
               price={price}
               bsc_link ={player.bsc_explorer}
               />
      ))}
   </nav>
   {(isLoadingPlayers && !isLoading) && <PlayLoader />}
  </span>);


  const showIfLessThanOrEqualTo768 = (
   <span className={classes.leaderContainer}>
   <nav className={classes.top}>
      <div>From</div>
      <div>Guess</div>
      <div>Entry</div>
      <div>Stake</div>
   </nav>
   <nav className={classes.contentContainer} ref={ref} onScroll={onScrollHandler}>
   {errorMsg}
   {playersArray.map(player=>(
         <GameRowMobile 
               keys={player.index}
               colorType={player.index}
               from={player.from}
               guess={player.guess}
               entry={player.myEntryCount}
               stake={player.value}
               roi={player.roi}
               symbol={player.symbol}
               price={price}
               bsc_link ={player.bsc_explorer}
               />
      ))}
   </nav>
   {isLoadingPlayers && <PlayLoader />}
  </span>
  );
   
   return <main className={classes.parent}>
       {isLoading && <LoadingUI />}
            <section className={classes.firstSection}>
               <div className={classes.leftLead}>
                  <h2>Lottero Leaderboard</h2>
                  <p>Below you can see leaderboard that shows the current players, their guessed number, entries, stake and ROI on Lottero platform.
                  </p>
                  <img src={trophyIcon} alt='' className={classes.trophyIcon} />
                  <button className={classes.lotteryBtn} onClick={joinLotteryHandler}>Join Lottery</button>
               </div>
               <div className={classes.rightLead}>
                   {width > 768 && showIfGreaterThan768}
                   {width <= 768 && showIfLessThanOrEqualTo768}
               </div>
            </section>
                <section className={classes.secondSection}>
                 <h2>Token Statistics</h2>
                 <span className={classes.statContainer}>
                    <div className={classes.box}>
                       <p>Contract:&nbsp; <b className={classes.bold}>{contractAddress}</b></p>
                       <p>Price:&nbsp; <b className={classes.bold}>{price}</b></p>
                       <p>Mcap:&nbsp; <b className={classes.bold}>{mcap}</b></p>
                       <p>LP:&nbsp; <b className={classes.bold}>{bnbLp}</b></p>
                    </div>
                    <div className={classes.box}>
                       <p>Name:&nbsp; <b className={classes.bold}>{tokenName}</b></p>
                       <p>Symbol:&nbsp; <b className={classes.bold}>{symbol}</b></p>
                       <p>T. Supply:&nbsp; <b className={classes.bold}>{totalSupply}</b></p>
                       <p>Circ Supply:&nbsp; <b className={classes.bold}>{circSupply}</b></p>
                    </div>
                    <div className={classes.gameBox}>
                       <p>Total Players:&nbsp; <b className={classes.bold}>{totalPlayers}</b></p>
                       <p>Draw Time:&nbsp; <b className={classes.bold}>{`${drawTime} UTC`}</b></p>
                       <p>Min Stake:&nbsp; <b className={classes.bold}>{`${minStake} ${symbol}`}</b></p>
                       <p>Max Stake:&nbsp; <b className={classes.bold}>{`${maxStake} ${symbol}`}</b></p>
                       <p>ROI:&nbsp; <b className={classes.bold}>{`${roi}X`}</b></p>
                    </div>
                 </span>
            </section>
            <section className={classes.thirdContainer}>
                  <div className={classes.shieldContainer}>
                     <img src={shieldIcon} alt='' className={classes.shieldIcon} />
                  </div>
                  <div className={classes.warningContainer}>
                  <span>
                      <p style={{textAlign: 'center', color: "#fff", fontWeight: 'bold', fontSize: '20px'}}>Warning: </p>
                      <p style={{padding: '10px 10px 10px 10px', color: 'rgb(177, 174, 174)', fontSize: '18px', textAlign: 'center'}}>We will not be responsible for your losses. Always do your own research, and make sure you trust the project before staking in their lottery. Never give away your seedphrase or click random links and always follow the official channels.</p>
                  </span>
                  </div>
            </section>
          </main>
}

export default PlayersList;

/**
 *        //        array.push(
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT', bsc_explorer: 'https://bscscan.com', index: 1},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 2},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 3},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT', bsc_explorer: 'https://bscscan.com', index: 4},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 5},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 6},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', inxdex: 7},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 8},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 9},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 10},
                     {from: '0xd36536372g7272838', guess: '44-23', myEntryCount: 5, value: 1000, roi: 300, symbol: 'BIGNFT',bsc_explorer: 'https://bscscan.com', index: 11});
 */
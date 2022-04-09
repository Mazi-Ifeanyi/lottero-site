import classes from './TokenomicsSection.module.css';
import copyImage from '../../assets/copy_icon.png'
import correctIcon from '../../assets/correct_icon.png';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isNull } from '../../util/Util';


const TokenomicsSection =() =>{
    const [isCopied, setIsCopied] = useState(false);
    const selector = useSelector(state => state.lottero);
    const ca = isNull(selector.contractAddress)? '--' : selector.contractAddress;

   

   const copyHandler = (e) =>{
      if(ca === '--') return;
       navigator.clipboard.writeText(ca).then(()=>{
        setIsCopied(true);
       }).catch(()=>{
           setIsCopied(false);
       });
      const timer = setTimeout(()=>{
        setIsCopied(false);
         }, 2000);
  
         return ()=> clearTimeout(timer);

   }

    return <div className={classes.parent} id='tokenomics'>
           <section className={classes.leftSection}>
           <h1>Trade with low tax.</h1>
           <p>Buy and sell Lottero at ease from pancakeswap without worrying about high tax.</p>
           <article className={classes.art}>
               <p className={classes.caPara}>Contract Address</p>
               <div className={classes.caContainer}>
                   <p className={classes.caPara}>{ca}</p>
                    {!isCopied && <img src={copyImage} alt='cp' className={classes.copyImage} onClick={copyHandler} />}
                  {isCopied &&  <div>
                        <img src={correctIcon} alt='cp' />
                    </div>}
               </div>
           </article>
          </section>
          <section className={classes.rightSection}>
             <div>
                 <p className={classes.leftPara}>Buy Tax</p>
                 <p className={classes.rightPara}>8%</p>
             </div>
             <div>
                 <p className={classes.leftPara}>Sell Tax</p>
                 <p className={classes.rightPara}>8%</p>
             </div>
             <div>
                 <p className={classes.leftPara}>Max Wallet</p>
                 <p className={classes.rightPara}>1%</p>
             </div>
          </section>
    </div>
}

export default TokenomicsSection;
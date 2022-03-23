import classes from './BottomSection.module.css';
import React from 'react';


const BottomSection = () =>{
    return (
        <main className={classes.parent}>
           <section>
               <h2 className={classes.h2Tag}>Join Community</h2>
               <a href='https://t.me/LotteroChat' target='blank'>Telegram</a>
               <a href='https://t.me/LotteroChannel' target='blank'>Channel</a>
               <a href='https://twitter.com/OfficialLottero' target='blank'>Twitter</a>
           </section>
           <section>
               <h2 className={classes.h2Tag}>Contract Links</h2>
               <a href='' target='blank'>Bsc scan</a>
               <a href='' target='blank'>Buy on poocoin</a>
               <a href='' target='blank'>Proof of Renounce</a>
               <a href='' target='blank'>Proof of liquidity lock</a>
           </section>
           <section>
               <h2 className={classes.h2Tag}>Others</h2>
               <a href='https://t.me/bscchairmanchat' target='blank'>Telegram Influencer</a>
           </section>
        </main>
    )
}

export default React.memo(BottomSection);
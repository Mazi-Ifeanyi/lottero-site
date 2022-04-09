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
               <a href='https://bscscan.com/token/0x3a83e8b8c9e447c2e90e6e036eac8624d883f5fc' target='blank'>Bsc scan</a>
               <a href='https://poocoin.app/tokens/0x3a83e8b8c9e447c2e90e6e036eac8624d883f5fc' target='blank'>Buy on poocoin</a>
               <a href='https://bscscan.com/tx/0x9c5e025406228e8da7da16215e9efefcb8a8b54f2b5924e8580daba28c2aec92'    target='blank'>Proof of Renounce</a>
               <a href='https://www.pinksale.finance/#/pinklock/record/45746?chain=BSC' target='blank'>Proof of liquidity lock</a>
           </section>
           <section>
               <h2 className={classes.h2Tag}>Others</h2>
               <a href='https://t.me/bscchairmanchat' target='blank'>Telegram Influencer</a>
               <a href='https://bscscan.com/address/0x3e929CC934c3d76029Bcc190802bEEaDaF8DbfDc#readContract' target='blank'>Lottery Contract</a>
           </section>
        </main>
    )
}

export default BottomSection;
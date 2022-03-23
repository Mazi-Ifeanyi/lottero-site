import React from 'react';
import classes from './RoadmapSection.module.css';
import roadmapImage from '../../assets/levels.png';

const RoadmapSection = () =>{
    return (
        <main className={classes.parent} id='roadmap'>
        <div>
            <h1 className={classes.h1Tag}>Lottero Roadmap</h1>
         </div>
         <div className={classes.sections}>
             <section className={classes.sectionOne}>
              <span className={classes.leftSection}>
                <img src={roadmapImage} alt='road' className={classes.roadImage} />
              </span>
              <span className={classes.rightSection}>
                 <p>Note that Lottero is 100% community driven without owners. This roadmap is not fixed or rigid. In fact it is flexible and can be adjusted anytime by the community as we work towards success.</p>
              </span>
           </section>
           <section className={classes.sectionTwo}>
             <div className={classes.roadContainer}>
                 <h2>Level 1</h2>
                 <article className={classes.levelContainer}>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>1</p>
                        <p className={classes.para}>Airdrop Program</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>2</p>
                        <p className={classes.para}>Create Twitter, Telegram</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>3</p>
                        <p className={classes.para}>Assign Mods</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>4</p>
                        <p className={classes.para}>Initial Airdrop Marketing</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>5</p>
                        <p className={classes.para}>Roadmap</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>6</p>
                        <p className={classes.para}>Website</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>7</p>
                        <p className={classes.para}>Whitepaper</p>
                    </span>
                 </article>
             </div>
             <div className={classes.roadContainer}>
                 <h2>Level 2</h2>
                 <article className={classes.levelContainer}>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>1</p>
                        <p className={classes.para}>Prelaunch Marketing</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>2</p>
                        <p className={classes.para}>AMA</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>3</p>
                        <p className={classes.para}>Strategic Patnership</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>4</p>
                        <p className={classes.para}>Project Launch</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>5</p>
                        <p className={classes.para}>Contract Renounce</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>6</p>
                        <p className={classes.para}>Community Takeover</p>
                    </span>
                 </article>
             </div>
             <div className={classes.roadContainer}>
                 <h2>Level 3</h2>
                 <article className={classes.levelContainer}>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>1</p>
                        <p className={classes.para}>CG and CMC</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>2</p>
                        <p className={classes.para}>Launch of Lottero Money</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>3</p>
                        <p className={classes.para}>Maker Bot</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>4</p>
                        <p className={classes.para}>Major Burn</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>5</p>
                        <p className={classes.para}>CEX Listing</p>
                    </span>
                 </article>
             </div> 
             <div className={classes.roadContainer}>
                 <h2>Level 4</h2>
                 <article className={classes.levelContainer}>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>1</p>
                        <p className={classes.para}>Major Patnership</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>2</p>
                        <p className={classes.para}>Joint Development Of Tgswap</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>3</p>
                        <p className={classes.para}>Launch Of Lotteroswap</p>
                    </span>
                    <span className={classes.itemsContainer}>
                        <p className={classes.numberPara}>4</p>
                        <p className={classes.para}>More Listing</p>
                    </span>
                 </article>
             </div>
           </section>
         </div>
        </main>
    );
}

export default RoadmapSection;
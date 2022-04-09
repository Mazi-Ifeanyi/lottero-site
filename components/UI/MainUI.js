import classes from './MainUI.module.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';

import hamburgerLogo from '../../assets/hamburger_icon.png';
import homeLogo from '../../assets/home.png';
import cancelLogoWhite from '../../assets/cancel_logo_white.png';
import GameIcon from '../../assets/game_icon.png';
import TokenomicsIcon from '../../assets/tokenomics_icon.png';
import MarketStatIcon from '../../assets/market-stat_icon.png';
import LotteroStatIcon from '../../assets/lottero-stat_icon.png';
import RoadmapIcon from '../../assets/roadmap_icon.png';
import TwitterIcon from '../../assets/twitter_icon.png';
import TelegramIcon from '../../assets/telegram_icon.png';
import ChannelIcon from '../../assets/channel_icon.png';
import PlayersIcon from '../../assets/players_icon.png';


import BottomSection from '../sub_ui/BottomSection';

function useWindowSize(){
    const [size, setSize] = useState([0, 0]);
  useLayoutEffect(()=>{
     function updateSize(){
        setSize([window.innerWidth, window.innerHeight]);
     }

     window.addEventListener('resize', updateSize);
     updateSize();

     return ()=> window.removeEventListener('resize', updateSize);
  },[]);

  return size;
}


const MainUI = (props) =>{
  const [width] = useWindowSize();
  const navigate = useNavigate();
  const [ isNavOpen, setIsNavOpen ] = useState(true);


//   useEffect(()=>{
//    navigate('/home');
//   },[navigate])

   useEffect(()=>{
      if(width >=400 ) document.getElementById('id').style.width = "250px";

   },[width]);


  const openNav = () =>{
    document.getElementById('id').style.width = "250px";
}


const closeNav = () =>{
  setIsNavOpen(false);
  if(width <= 930 ) document.getElementById('id').style.width = "0";
  if(width > 768) return;
  document.getElementById('id').style.width = "0";

}

const closeAndNavigate = () =>{
   setIsNavOpen(false);
   navigate('/home');
   if(width <= 930 ) document.getElementById('id').style.width = "0";
   if(width > 768) return;
   document.getElementById('id').style.width = "0";
 
 }

const openTwitterLinkHandler = () =>{
   window.open('https://twitter.com/OfficialLottero','noopener, noreferrer');
}

const openTelegramLinkHandler = () =>{
   window.open('https://t.me/LotteroChat','noopener, noreferrer');
}

const openChannelLinkHandler = () =>{
   window.open('https://t.me/LotteroChannel','noopener, noreferrer');
}


const downloadWhitePaper = () =>{
   saveAs('https://lottero.finance/Lottero_wp.pdf');
}

const navigateToGames = () =>{
   setIsNavOpen(false);
   navigate(`/players/${`0x3A83E8B8C9E447C2E90e6e036EAC8624D883f5FC`}`)
   // navigate('/players/'+ '0x3A83E8B8C9E447C2E90e6e036EAC8624D883f5FC');
   if(width <= 930 ) document.getElementById('id').style.width = "0";
  if(width > 768) return;
  document.getElementById('id').style.width = "0";
}

    return (
        <main className={classes.parent}>
         {(width >=300 || isNavOpen) && <section className={classes.sideNav}  id='id'>
           {(width <= 768 || (width >=810 && width <= 930)) && <div className={classes.cancelContainer}>
           <img src={cancelLogoWhite} alt='' className={classes.cancelIcon} onClick={closeNav}/>
           </div>}
        <div className={classes.logoContainer}>
           <h1>Lottero</h1>
        </div>
        <nav className={classes.nav}>
              <Link to="home-section" smooth={true} spy={true} className={classes.navList} onClick={closeAndNavigate}>
                 <div>
                    <img src={homeLogo} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Home</p>
               </Link>
               <Link to="game-stat" smooth={true} spy={true} className={classes.navList} onClick={closeAndNavigate}>
                 <div>
                    <img src={GameIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Game Stats</p>
            </Link>
               <Link to="lottero-stat" smooth={true} spy={true} className={classes.navList} onClick={closeAndNavigate}>
                 <div>
                    <img src={LotteroStatIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Lottero Stats</p>
            </Link>
            <Link to="market-stat" smooth={true} spy={true} className={classes.navList} onClick={closeAndNavigate}>
                 <div>
                    <img src={MarketStatIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Market Stats</p>
            </Link>
            <Link to="tokenomics" smooth={true} spy={true} className={classes.navList} onClick={closeAndNavigate}>
                 <div>
                    <img src={TokenomicsIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Tokenomics</p>
            </Link>
            <Link to="roadmap" smooth={true} spy={true} className={classes.navList} onClick={closeAndNavigate}>
                 <div>
                    <img src={RoadmapIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Roadmap</p>
            </Link>
            <Link to="" smooth={true} spy={true} className={classes.navList} onClick={navigateToGames}>
                 <div>
                    <img src={PlayersIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Players</p>
            </Link>
           {width <= 768 && <nav className={classes.bottomSocials}>
                 <p>Join Community</p>
                 <span className={classes.socials}>
                    <div onClick={openTwitterLinkHandler}>
                       <img src={TwitterIcon} alt='' className={classes.twtImg}/>   
                    </div>
                    <div onClick={openTelegramLinkHandler}>
                       <img src={TelegramIcon} alt='' className={classes.tgImg}/>   
                    </div>
                    <div onClick={openChannelLinkHandler}>
                       <img src={ChannelIcon} alt='' className={classes.twtImg}/>   
                    </div>
                 </span>
            </nav>}
        </nav>
    </section>}

    {/* This is the second section i.e the top section */}
    <section className={classes.main} id='main'>
        <header className={classes.header}>
       {(width <= 768 || (width >=810 && width <= 930)) &&<nav className={classes.hamburgerContainer}>
              <div>
                 <img src={hamburgerLogo} alt='' className={classes.hamburgerIcon} onClick={openNav}/>
              </div>
              </nav>}

              {width >= 600 &&  <nav className={classes.topLeft}>
             {width >= 800 && <div className={classes.iconContainer} onClick={openTwitterLinkHandler}>
                 <img src={TwitterIcon} alt='' className={classes.twtImg} />
              </div>}
              {width >= 800 && <div className={classes.iconContainer} onClick={openTelegramLinkHandler}>
                 <img src={TelegramIcon} alt='' className={classes.twtImg}/>
              </div>}
              {width >= 800 &&  <div className={classes.iconContainer} onClick={openChannelLinkHandler}>
                 <img src={ChannelIcon} alt='' className={classes.icon}/>
              </div>}
            </nav>}
        <nav className={classes.topRight}>
            <button className={classes.whitePaperBtn} onClick={downloadWhitePaper}>White Paper</button>
          </nav>
        </header>
        {props.children}
        <BottomSection /> 
     </section>
         </main>
    );
}

export default MainUI;
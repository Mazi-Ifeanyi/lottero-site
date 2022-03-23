import classes from './MainUI.module.css';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-scroll';
import useAxios from '../../hooks/use-axios';
import { useDispatch } from 'react-redux';
import { saveAs } from 'file-saver';


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

import HomeSection from '../sub_ui/HomeSection';
import LotteroStatSection from '../sub_ui/LotteroStatSection';
import MarketStatSection from '../sub_ui/MarketStatSection';
import TokenomicsSection from '../sub_ui/TokenomicsSection';
import RoadmapSection from '../sub_ui/RoadmapSection';
import BottomSection from '../sub_ui/BottomSection';
import GameStatSection from '../sub_ui/GameStatSection';
import { saveLotteroData } from '../../store/Slice';
import LoadingUI from './LoadingUI';
import Popup from './Popup';


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


const Header = () =>{
   const dispatch = useDispatch();
  const [width] = useWindowSize();
  const [ isNavOpen, setIsNavOpen ] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const { sendGetRequest, isLoading } = useAxios();


   useEffect(()=>{
      if(width >=400 ) document.getElementById('id').style.width = "250px";

   },[width]);

   
   useEffect(()=>{
      //send request to server
      // const url = 'http://192.168.43.188:4000';
      const url = 'https://lottero.finance/market';

       sendGetRequest(url, function(resData){
         dispatch(saveLotteroData(resData));
       });

   },[sendGetRequest, dispatch]);



  const openNav = () =>{
    document.getElementById('id').style.width = "250px";
    // document.getElementById('main').style.marginLeft = "250px";
}


const closeNav = () =>{
  setIsNavOpen(false);
  if(width <= 930 ) document.getElementById('id').style.width = "0";
  if(width > 768) return;
  document.getElementById('id').style.width = "0";
  // document.getElementById('main').style.marginLeft = "0";

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
   setShowPopup(true);
   const timer = setTimeout(()=>{
      setShowPopup(false);
   }, 2000);

   return ()=> clearTimeout(timer);
  // saveAs('http://localhost:4000/whitepaper', 'LTOPaper.pdf');
}

    return (
        <main className={classes.parent}>
          { isLoading && <LoadingUI />}
          {showPopup && <Popup width={width} text={`Whitepaper will be available soon.`} />}
         {(width >=300 || isNavOpen) && <section className={classes.sideNav}  id='id'>
           {(width <= 768 || (width >=810 && width <= 930)) && <div className={classes.cancelContainer}>
           <img src={cancelLogoWhite} alt='' className={classes.cancelIcon} onClick={closeNav}/>
           </div>}
        <div className={classes.logoContainer}>
           <h1>Lottero</h1>
        {/* <img src={lotteroLogo} alt='' className={classes.logo}/> */}
        </div>
        <nav className={classes.nav}>
              <Link to="home-section" smooth={true} spy={true} className={classes.navList} onClick={closeNav}>
                 <div>
                    <img src={homeLogo} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Home</p>
               </Link>
               <Link to="game-stat" smooth={true} spy={true} className={classes.navList} onClick={closeNav}>
                 <div>
                    <img src={GameIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Game Stats</p>
            </Link>
               <Link to="lottero-stat" smooth={true} spy={true} className={classes.navList} onClick={closeNav}>
                 <div>
                    <img src={LotteroStatIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Lottero Stats</p>
            </Link>
            <Link to="market-stat" smooth={true} spy={true} className={classes.navList} onClick={closeNav}>
                 <div>
                    <img src={MarketStatIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Market Stats</p>
            </Link>
            <Link to="tokenomics" smooth={true} spy={true} className={classes.navList} onClick={closeNav}>
                 <div>
                    <img src={TokenomicsIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Tokenomics</p>
            </Link>
            <Link to="roadmap" smooth={true} spy={true} className={classes.navList} onClick={closeNav}>
                 <div>
                    <img src={RoadmapIcon} alt='' className={classes.homeImg}/>   
                 </div>
                 <p>Roadmap</p>
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

    {/* This is the second section */}
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
        <HomeSection />
        <GameStatSection width={width} />
        <LotteroStatSection />
        <MarketStatSection />
        <TokenomicsSection />
        <RoadmapSection />
        <BottomSection />
     </section>
         </main>
    );
}

export default Header;
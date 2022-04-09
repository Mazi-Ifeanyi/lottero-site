import HomeSection from "../components/sub_ui/HomeSection";
import GameStatSection from "../components/sub_ui/GameStatSection";
import LotteroStatSection from "../components/sub_ui/LotteroStatSection";
import MarketStatSection from "../components/sub_ui/MarketStatSection";
import TokenomicsSection from "../components/sub_ui/TokenomicsSection";
import RoadmapSection from "../components/sub_ui/RoadmapSection";



const MainPage = () =>{
  return <main>
         <HomeSection />
         <GameStatSection  />
        <LotteroStatSection />
        <MarketStatSection />
        <TokenomicsSection />
        <RoadmapSection />
  </main>
}

export default MainPage;
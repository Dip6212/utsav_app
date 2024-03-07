import Header from "../../components/Header/Header";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Genres from "./Genres/Genres";
import HeroSection from "./HeroSection/HeroSection";
import Latest from "./Latest/Latest";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";
import Upcoming from "./Upcoming/Upcoming";
import "./style.css";

function Home() {
    return ( <div className="home">
        <Header/>
        <HeroSection/>
        <div className="movies_container cmn_gap">
            <ContentWrapper>
        <Genres/>
        <Upcoming/>
        <Latest/>
        <TopRated/>
        <Popular/>
        </ContentWrapper>
        </div>
    </div> );
}

export default Home;
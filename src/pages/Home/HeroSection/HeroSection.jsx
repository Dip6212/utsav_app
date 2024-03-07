import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import { FaPlay } from "react-icons/fa6";

import "./style.css"
import Cmn_Btn from "../../../components/cmn_btn/Cmn_Btn";



 function HeroSection(){
    return ( <div className="Hero_Section">
        <div className="Hero_Banner">

        </div>
        <div className="Hero_Banner_Content">
            <ContentWrapper>
                <div className="Banner_content_wrap">
            <h1>Best viewing experience with Utsav</h1>
            <p>Utsav is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With Utsav, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <Cmn_Btn icon={<FaPlay/>} text="Start Watching Now" />
            </div>
            </ContentWrapper>
        </div>
    </div> );
}

export default HeroSection;
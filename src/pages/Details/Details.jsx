import Cast from "./Cast/Cast";
import Description from "./Description/Description";
import DetailsBanner from "./detailsBaner/DetailsBanner";
import Review from "./Review/Review"
import Other from "./other/Other"
import "./style.css"
import useFetch from "../hooks/UseFetch";
import { useParams, useSearchParams } from "react-router-dom";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "../../components/Header/Header";

function Details() {
    const {id}=useParams();
    const {data,loading}=useFetch(`/movie/${id}`);
    const {data: credits,loading:creditsLoading}=useFetch(`/movie/${id}/credits`);
    const {data:reviews,loading:reviewLoading}=useFetch(`/movie/${id}/reviews`);
    const showMenu=true;

    return ( <div className="detail_page">
        <Header showMenu={showMenu}/>
        <DetailsBanner/>
            <ContentWrapper>
        <div className="detail_section cmn_gap">
            <div className="details_section_left">
                <Description data={data} loading={loading}/>
                <Cast data={credits?.cast} loading={creditsLoading}/>
                <Review data={reviews?.results} loading={reviewLoading}/>
            </div>
            <div className="details_section_right">
                <Other data={data} loading={loading} crew={credits?.crew}/>
            </div>
        </div>
            </ContentWrapper>

    </div> );
}

export default Details;
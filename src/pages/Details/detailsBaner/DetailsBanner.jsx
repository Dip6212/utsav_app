import { useParams } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
import React from "react";
import "./style.css"
import { FaPlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { HiSpeakerWave } from "react-icons/hi2";

import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Cmn_Btn from "../../../components/cmn_btn/Cmn_Btn";

function DetailsBanner() {

    const {id}=useParams();
    const {data,loading}=useFetch(`/movie/${id}`);
    const {url}=useSelector((state)=>state.home);


    return ( 
        <div className="details_banner">
            {!loading ? 
            (<>
                {!!data && (
                    <React.Fragment>
                        <div className="details_banner_wrapper">
                            <div className="details_banner">
                            <img src={url.backdrop + data.backdrop_path} />
                            </div>
                            <ContentWrapper>
                                <div className="details_banner_content">
                                    <h1>{data.original_title}</h1>
                                    <p>{data.tagline}</p>
                                    <div className="details_banner_links">
                                    <Cmn_Btn icon={<FaPlay/>} text={"Play Now"} />
                                    <div className="banner_icon"><FaPlus/></div>
                                    <div className="banner_icon"><AiFillLike/></div>
                                    <div className="banner_icon"><HiSpeakerWave/></div>
                                    </div>
                                </div>
                            </ContentWrapper>
                        </div>
                        
                    </React.Fragment>
                )}
            </>) 
            : (<div>nothing to show</div>)}
        </div>
     );
}

export default DetailsBanner;
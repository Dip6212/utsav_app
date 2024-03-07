import useFetch from "../../hooks/UseFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import dayjs from "dayjs";
import "./style.css"
import { useNavigate } from "react-router-dom";


function Latest() {

    const { data, loading } = useFetch("/movie/now_playing");
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="fa-solid fa-arrow-left" onClick={onClick}>

            </button>
        );
    };

    // Custom arrow component for the next button
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <button className="fa-solid fa-arrow-right" onClick={onClick}>

            </button>
        );
    };

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true,
                
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows:false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                dots: true,
                arrows: false
            }
        }
    ]
};






return (<div className="latest_carousal_section cmn_gap">
    {/* <ContentWrapper> */}
        <h2>Latest On Utsav</h2>


        {!loading ? (<Slider {...settings}>
            {data?.results?.slice(0, 15).map((item) => {
                return (

                    <div
                        key={item.id}
                        className="carouselItem"
                        onClick={() =>
                            navigate(
                                `/movie/${item.id}`
                            )}
                    >
                        <div className="posterBlock">
                            <img src={url.poster + item.poster_path} />
                        </div>
                        <div className="textBlock">
                            Released at
                            <span className="date">
                                {dayjs(item.release_date || item.first_air_date).format(
                                    " D MMM, YYYY"
                                )}
                            </span>
                        </div>
                    </div>

                );
            })
            }
        </Slider>)

            : (<div>nothing to show</div>)

        }










    {/* </ContentWrapper> */}
</div>);
}

export default Latest;
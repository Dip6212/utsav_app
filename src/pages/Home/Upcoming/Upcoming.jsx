import useFetch from "../../hooks/UseFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaEye } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'

import "./style.css"
import { useNavigate } from "react-router-dom";

function Upcoming() {

    const { data, loading } = useFetch("/movie/upcoming");
    const BASE_URL = "https://api.themoviedb.org/3";
    
    const { url } = useSelector((state) => state.home);
    const navigate=useNavigate();
   
    
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

    function abbreviateNumber(number){
    
        // what tier? (determines SI symbol)
        var tier = Math.log10(Math.abs(number)) / 3 | 0;
    
        // if zero, we don't need a suffix
        if(tier == 0) return number;
    
        // get suffix and determine scale
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);
    
        // scale the number
        var scaled = number / scale;
    
        // format number and add suffix
        return scaled.toFixed(1) + suffix;
    }
    

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (number) => {
      setRating(number)
  
      // other logic
    }
    

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
    return (<div className="upcoming_carousal_section cmn_gap">
        {/* <ContentWrapper> */}
            <h2>Upcoming Bangers</h2>

                {!loading ? (<Slider {...settings}>
                    {data?.results?.slice(0,15).map((item) => {
                     
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
                                   <p className="popularity_section"><span><FaEye/></span> {abbreviateNumber(item.popularity)}</p>
                                   <div className="rating_content">
                    
                                   <Rating 
                                   initialValue={item.vote_average<5 ? (item.vote_average):(item.vote_average*0.5)}
                                   readonly
                                   fillColor="#E60000"
                                   allowFraction
                                   iconsCount={5}
                                   />
                                   <p>{abbreviateNumber(item.vote_count)}</p>
                                    </div>
                                    
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

export default Upcoming;
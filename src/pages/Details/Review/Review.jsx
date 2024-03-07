import "./style.css"
import { FaPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from 'react-simple-star-rating'
import React, { useState } from "react";
import Slider from "react-slick";

function Review({ data, loading }) {

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
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
    };

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (number) => {
        setRating(number)

        // other logic
    }





    return (<div className="review_section">
        <div className="review_title_section">
            <p>Reviews</p>
            <button className="review_btn"><span><FaPlus /></span> Add Your Review</button>
        </div>

        {!loading ? (
            <div className="review_container">  
               {data && <Slider {...settings}>
                    {data?.slice(0,8).map((item) => {
                        let realRating = item.author_details.rating < 5 ? (item.author_details.rating) : (item.author_details.rating * 0.5)
                        return (
                            <div key={item.id} className="review_item">
                                <div className="author_section">
                                    <h5>{item.author}</h5>
                                    <div>
                                        <Rating
                                            initialValue={realRating}
                                            readonly
                                            fillColor="#E60000"
                                            allowFraction
                                            iconsCount={5}
                                        /> <span> {realRating}</span>
                                    </div>
                                </div>
                                <div
                                    className="review_content">
                                    <p>{item.content.split(" ").slice(0, 15).join(" ") + "..."}</p>
                                </div>
                                

                            </div>
                        );
                    })}
                </Slider>}
              
            </div>) : (
            <div>loading...</div>
        )}
    </div>);
}

export default Review;
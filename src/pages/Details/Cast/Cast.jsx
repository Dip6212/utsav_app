
import { useSelector } from "react-redux";
import "./style.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
function Cast({ data, loading }) {
  const { url } = useSelector((state) => state.home);

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
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (<div className="cast_section">
    <div className="sectionHeading"><p>Cast</p></div>
    {!loading ? (
      <div>
        <Slider {...settings}>
          {data?.map((item) => {
            let imgUrl = url.profile + item.profile_path;
            return (
              <div key={item.id} className="listItem">

                <img src={imgUrl} alt="not available" />


              </div>
            );
          })}
        </Slider>
      </div>) : (
      <div>loading...</div>
    )}
  </div>);
}

export default Cast;
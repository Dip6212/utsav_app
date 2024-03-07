import useFetch from "../../hooks/UseFetch";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./style.css"
import { FaArrowRight } from "react-icons/fa6";
import thumb from "../../../assets/genre_thumbnail.png";

function Genres() {

    const { data, loading } = useFetch("/genre/movie/list");
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
    return (<div className="genre_carousal_section">
        {/* <ContentWrapper> */}
            <h2>Our Genres</h2>



            
                {/* <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div> */}


                {!loading ? (<Slider {...settings}>
                    {data?.genres?.slice(0,15).map((item) => {
                        return (
                            
                            <div
                                key={item.id}
                                className="carouselItem"
                            >
                                <div className="posterBlock">
                                    <img src={thumb}/>
                                </div>
                                <div className="textBlock">
                                  <p>{item.name}</p>
                                  <p><FaArrowRight/></p>
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

export default Genres;
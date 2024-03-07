import "./style.css"
import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'
import { CiCalendar } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useState } from "react";
import useFetch from "../../hooks/UseFetch";
function Other({ data, loading, crew }) {

    const { url } = useSelector((state) => state.home);
    let imdb_id = data?.imdb_id;
    const { data: imdb, loading: imdbLoading } = useFetch(`/find/${imdb_id}?external_source=imdb_id`);

    const director = crew?.filter((f) => f.job === "Director");
    const music = crew?.filter((m) => m.job === "Original Music Composer");

    let realRating = imdb?.movie_results[0]?.vote_average < 5 ? (imdb?.movie_results[0]?.vote_average) : (imdb?.movie_results[0]?.vote_average * 0.5);
    console.log(imdb?.movie_results[0]?.vote_average);
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (number) => {
        setRating(number)

        // other logic
    }

    return (<div className="other_section">

        {!loading ? (
            <>
                {!!data && (
                    <React.Fragment>

                        <div className="release_date_section">
                            <p><span><CiCalendar/></span> Released year</p>
                            <h5>{dayjs(data.release_date || data.first_air_date).format(
                                "YYYY"
                            )}</h5>
                        </div>

                        <div className="languages_section">
                            <p><span><HiLanguage/></span> Available Languages</p>
                            <div>
                                {data.spoken_languages.map((item) => {
                                    return (
                                        <div className="language" key={item.id}>
                                            {item.english_name}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {!imdbLoading ?
                            (<div>
                                <p><span><CiStar/></span> Review</p>
                                {imdb &&
                                
                                    (<div className="imdb_rating">
                                        <h5>IMDB</h5>
                                        <div className="rating_content">
                                        <Rating
                                            initialValue={realRating}
                                            readonly
                                            fillColor="#E60000"
                                            allowFraction
                                            iconsCount={5}
                                            /> <span>{realRating}</span>
                                            </div>
                                    </div>)

                                }
                            </div>)

                            : (<div>loading...</div>)

                        }


                        <div className="Genres_section">
                            <p><span><HiOutlineSquares2X2/></span> Genres</p>
                            <div>
                                {data.genres.map((item) => {
                                    return (
                                        <div className="genre" key={item.id}>
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {director?.length > 0 && (
                            <div className="director_section">
                                <p>
                                    Director
                                </p>


                                {director?.map((d, i) => (
                                    <div className="info" key={i}>
                                        <div className="director_image">
                                            <img src={url.profile + d.profile_path} />
                                        </div>
                                        <h5>{d.name}</h5>
                                        {director.length -
                                            1 !==
                                            i && ", "}
                                    </div>
                                ))}
                            </div>
                        )}

                        {music?.length > 0 && (
                            <div className="music_section">
                                <p>
                                    Music Director
                                </p>


                                {music?.map((d, i) => (
                                    <div className="info" key={i}>
                                        <div className="director_image">
                                            <img src={url.profile + d.profile_path} />
                                        </div>
                                        <h5>{d.name}</h5>
                                        {director.length -
                                            1 !==
                                            i && ", "}
                                    </div>
                                ))}
                            </div>
                        )}



                    </React.Fragment>
                )}

            </>
        ) : (<p>loading...</p>)

        }
    </div>
    );
}

export default Other;
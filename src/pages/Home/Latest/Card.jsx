import { useSelector } from "react-redux";
import dayjs from "dayjs";
function Card({item}) {

    const {url}=useSelector((state)=>state.home);
    return (
        <div
            key={item.id}
            className="carouselItem"
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
}

export default Card;
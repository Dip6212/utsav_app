import logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import "./style.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-scroll";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Upcoming from "../../pages/Home/Upcoming/Upcoming";

function Header({showMenu}) {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location=useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };


    return (
        <nav className={`header ${mobileMenu ? "mobileView" : ""} `}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>

               {showMenu ? (<></>) :(<ul className="menuItems">
                    <li className="menuItem nav_content"><Link to="/">Home</Link></li>
                    <li className="menuItem nav_content"><Link  activeClass="active" to="upcoming_carousal_section" spy={true} smooth={true}  duration={500} >Upcoming</Link></li>
                    <li className="menuItem nav_content"><Link  activeClass="active" to="latest_carousal_section" spy={true} smooth={true}  duration={500}>Latest</Link></li>
                    <li className="menuItem nav_content"><Link  activeClass="active" to="popular_carousal_section" spy={true} smooth={true}  duration={500}>Popular</Link></li>
                    <li className="menuItem nav_content"><Link  activeClass="active" to="topRated_carousal_section" spy={true} smooth={true}  duration={500}>Top Rated</Link></li>

                </ul>)}

                <div className="menuItems hide-element">
                    <li className="menuItem search-icon"><Link to="/"><IoMdSearch onClick={openSearch} /></Link></li>
                    <li className="menuItem"><Link to="/"><CiBellOn /></Link></li>
                </div>

                <div className="mobileMenuItems">
                    { mobileMenu ? (<>
                    <IoMdSearch onClick={openSearch} />
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                        </> ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}

        </nav>

    );
}

export default Header;
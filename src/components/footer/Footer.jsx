import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import "./style.css"

function Footer() {
    return ( <div className="footer cmn_gap">
        <ContentWrapper>
            <div className="footer_content_wrapper">
                <ul className="footer_content">
                    <h5>
                    Home
                    </h5>
                    <li><Link to="/">Categories</Link></li>
                    <li><Link to="/">Devices</Link></li>
                    <li><Link to="/">Pricing</Link></li>
                    <li><Link to="/">FAQ</Link></li>
                </ul>
                <ul className="footer_content">
                      <h5>
                      Movies
                    </h5>
                    <li><Link to="/">Gernes</Link></li>
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/">New Release</Link></li>
                    <li><Link to="/">Popular</Link></li>
                </ul>
                <ul className="footer_content">
                      <h5>
                      Shows
                    </h5>
                    <li><Link to="/">Gernes</Link></li>
                    <li><Link to="/">Trending</Link></li>
                    <li><Link to="/">New Release</Link></li>
                    <li><Link to="/">Popular</Link></li>
                </ul>
                <ul className="footer_content">
                      <h5>
                      Support
                    </h5>
                    <li><Link to="/">Contact Us</Link></li>
                    
                </ul>
                <ul className="footer_content">
                      <h5>
                      Subscription
                    </h5>
                    <li><Link to="/">Plans</Link></li>
                    <li><Link to="/">Features</Link></li>
                </ul>
                <ul className="footer_content">
                      <h5>
                      Connect With Us
                    </h5>
                    <div className="social_content">
                    <div className="social"><Link to="/"><FaFacebookF/></Link></div>
                    <div className="social"><Link to="/"><FaTwitter/></Link></div>
                    <div className="social"><Link to="/"><FaLinkedin/></Link></div>
                    </div>
                </ul>
            </div>
        </ContentWrapper>
    </div> );
}

export default Footer;
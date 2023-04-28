import logo from './icons_assets/Logo.svg';
import { Link } from "react-router-dom";
import {useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <section className="door-nav">
        <h2> Navigation </h2>
        <Link to="/">Home</Link>
        <Link to="#About" onClick={handleClick("About")}>About</Link>
        <Link to="#special" onClick={handleClick("special")}>Menu</Link>
        <Link to="/booking">Reservations</Link>
        <Link to="/">Order Online</Link>
        <Link to="/">Login</Link>
      </section>
      <section className="contact">
        <h2> Contact </h2>
        <h3> Address </h3>
        <h3> Phone Number </h3>
        <h3> Email </h3>
      </section>
      <section className="social-media">
        <h2> Social Media Links </h2>
        <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
        <h3> Twitter </h3>
        <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
        <h3> Instagram </h3>
        <FontAwesomeIcon icon={faFacebook} className="social-icon"/>
        <h3> Facebook </h3>
      </section>
    </footer>
  );
};

export default Footer;

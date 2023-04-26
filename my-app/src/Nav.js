import { Link } from "react-router-dom";
import {useEffect, useRef} from "react";

function Nav() {
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
    <nav>
      <Link to="/">Home</Link>
      <Link to="#About" onClick={handleClick("About")}>About</Link>
      <Link to="#special" onClick={handleClick("special")}>Menu</Link>
      <Link to="/booking">Reservations</Link>
      <Link to="/">Order Online</Link>
      <Link to="/">Login</Link>
    </nav>
  );
}

export default Nav;

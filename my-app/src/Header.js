import logo from './icons_assets/Logo.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />
      </Link>
    </header>
  );
}

export default Header;

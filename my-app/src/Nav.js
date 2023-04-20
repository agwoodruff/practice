import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/special">Menu</Link>
      <Link to="/booking">Reservations</Link>
      <Link to="/">Order Online</Link>
      <Link to="/">Login</Link>
    </nav>
  );
}

export default Nav;

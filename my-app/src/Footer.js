import logo from './icons_assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <section className="door-nav">
        <h2> Doormat Navigation </h2>
        <ul>
          <li>
            <a href={" "}> Home </a>
          </li>
          <li>
            <a href={" "}> About </a>
          </li>
          <li>
            <a href={" "}> Menu </a>
          </li>
          <li>
            <a href={" "}> Reservations </a>
          </li>
          <li>
            <a href={" "}> Order Online </a>
          </li>
          <li>
            <a href={" "}> Login</a>
          </li>
        </ul>
      </section>
      <section className="contact">
        <h2> Contact </h2>
        <h3> Address </h3>
        <h3> Phone Number </h3>
        <h3> Email </h3>
      </section>
      <section className="social-media">
        <h2> Social Media Links </h2>
        <h3> Address </h3>
        <h3> Phone Number </h3>
        <h3> Email </h3>
      </section>
    </footer>
  );
};

export default Footer;

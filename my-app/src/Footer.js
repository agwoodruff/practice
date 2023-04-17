import logo from './icons_assets/Logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo">
      <section className="door-nav">
        <h2> Doormat Navigation </h2>
        <h3> Home </h3>
        <h3> About </h3>
        <h3> Menu <h3>
        <h3> Reservations </h3>
        <h3> Order Online </h3>
        <h3> Login </h3>
      </section>
      <section className="contact">
        <h2> Contact </h2>
        <h3> Address </h3>
        <h3> Phone Number </h3>
        <h3> Email <h3>
      </section>
      <section className="social-media">
        <h2> Social Media Links </h2>
        <h3> Address </h3>
        <h3> Phone Number </h3>
        <h3> Email <h3>
      </section>
    </footer>
  );
}

export default Footer;

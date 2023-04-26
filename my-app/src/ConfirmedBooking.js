import Nav from "./Nav.js";
import Header from "./Header.js";
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Nav />
      <section id="confirmation">
        <h1> Your reservation has been confirmed. </h1>
        <button aria-label="On Click" onClick={() => navigate("/")}> Back to homepage </button>
      </section>
    </>
  );
}

export default ConfirmedBooking;

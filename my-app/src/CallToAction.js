import heroImg from './icons_assets/restauranfood.jpg';
import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();
  return (
    <section className="hero-section">
      <h1> Little Lemon </h1>
      <h2> Chicago </h2>
      <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
      <button aria-label="On Click" onClick={() => navigate("/booking")} type="button"> Reserve a Table </button>
      <img src={heroImg} alt="someone holding a plate of sandwiches"/>
    </section>
  );

}

export default CallToAction;

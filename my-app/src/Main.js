import heroImg from './icons_assets/restauranfood.jpg';
import greekSalad from './icons_assets/greek salad.jpg';
import bruchetta from './icons_assets/bruchetta.svg';
import lemonDessert from './icons_assets/lemon dessert.jpg';
import icon from "./icons_assets/abstract-user-flat-1.svg";
import mario from "./icons_assets/Mario and Adrian A.jpg";
import restaurant from "./icons_assets/restaurant.jpg";

function Main() {
  return (
    <main>
      <section className="hero-section">
        <h1> Little Lemon </h1>
        <h2> Chicago </h2>
        <p> We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
        <button type="button"> Reserve a Table </button>
        <img src={heroImg} alt="someone holding a plate of sandwiches"/>
      </section>
      <section className="highlights">
        <h1> This week's specials! </h1>
        <button type="button"> Online Menu </button>
        <section className="special">
          <img src={greekSalad} alt="Greek salad"/>
          <h4> Greek Salad </h4>
          <h5> $12.99 </h5>
          <p> The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <a href={" "}> Order a delivery </a>
        </section>
        <section className="special">
          <img src={bruchetta} alt="Bruchetta"/>
          <h4> Bruchetta </h4>
          <h5> $5.99 </h5>
          <p> Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
          <a href={" "}> Order a delivery </a>
        </section>
        <section className="special">
          <img src={lemonDessert} alt="Lemon Dessert"/>
          <h4> Lemon Dessert </h4>
          <h5> $5.00 </h5>
          <p> This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
          <a href={" "}> Order a delivery </a>
        </section>
      </section>
      <section className="testimonials">
        <h1> Testimonials </h1>
        <section className="review">
          <h4> Rating </h4>
          <img src={icon} alt="A person icon"/>
          <h5> Name </h5>
          <p> Review here </p>
        </section>
        <section className="review">
          <h4> Rating </h4>
          <img src={icon} alt="A person icon"/>
          <h5> Name </h5>
          <p> Review here </p>
        </section>
        <section className="review">
          <h4> Rating </h4>
          <img src={icon} alt="A person icon"/>
          <h5> Name </h5>
          <p> Review here </p>
        </section>
        <section className="review">
          <h4> Rating </h4>
          <img src={icon} alt="A person icon"/>
          <h5> Name </h5>
          <p> Review here </p>
        </section>
      </section>
      <section className="About">
        <h1> Little Lemon </h1>
        <h2> Chicago </h2>
        <p> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        <img src={restaurant} alt="Outdoors at the Little Lemon" />
        <img src={mario} alt="Mario and Adrian" />
      </section>
    </main>
  );
}

export default Main;

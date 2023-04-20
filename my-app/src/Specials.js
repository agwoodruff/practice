import greekSalad from './icons_assets/greek salad.jpg';
import bruchetta from './icons_assets/bruchetta.svg';
import lemonDessert from './icons_assets/lemon dessert.jpg';

function Specials() {
  return (
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
  );
}
export default Specials;

import mario from "./icons_assets/Mario and Adrian A.jpg";
import restaurant from "./icons_assets/restaurant.jpg";

function Chicago() {
  return (
    <section className="About">
      <h1> Little Lemon </h1>
      <h2> Chicago </h2>
      <p> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
      <img src={restaurant} alt="Outdoors at the Little Lemon" />
      <img src={mario} alt="Mario and Adrian" />
    </section>
  );

}

export default Chicago;

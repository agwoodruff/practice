import icon from "./icons_assets/abstract-user-flat-1.svg";

function CustomersSay() {
  return (
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
  );

}

export default CustomersSay;

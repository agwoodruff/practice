import {useState} from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setGuests("");
    setOccassion("");
    setTime("");
    console.log("Form submitted");
    props.submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Book Now </h1>
      <label htmlFor="res-date"> Choose date: </label>
      <input type="date" name="res-date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value); props.setAvailableTimes({type:e.target.value});}} />
      <label htmlFor="res-time"> Choose time: </label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {props.availableTimes.map((availTime) => (
          <option id="res-time" data-testid="res-time">{availTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests: {guests} </label>
      <input
        id="guests"
        type="range"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
      <label htmlFor="occassion">Occasion</label>
      <select
        id="occassion"
        value={occassion}
        onChange={(e) => setOccassion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type="submit" role="button"> Make Your Reservation </button>
    </form>
  );
}

export default BookingForm;

import {useState} from "react";

function BookingForm(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [occassion, setOccassion] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
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
      <label htmlFor="res-name"> Name: </label>
      <input required type="text" id="res-name" value={name} onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="res-date"> Date: </label>
      <input required type="date" name="res-date" id="res-date" value={date} onChange={(e) => {setDate(e.target.value); props.setAvailableTimes({type:e.target.value});}} />
      <label htmlFor="res-time"> Time: </label>
      <select required id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">Please select</option>
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
        required
      />
      <label htmlFor="occassion">Occasion:</label>
      <select
        required
        id="occassion"
        value={occassion}
        onChange={(e) => setOccassion(e.target.value)}>
        <option value="">Please select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button aria-label="On Click" disabled={!name || !date || !guests || !occassion || !time} type="submit"> Make Your Reservation </button>
    </form>
  );
}

export default BookingForm;

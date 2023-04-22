import BookingForm from "./BookingForm.js";
import {useState, useReducer} from "react";

const updateTimes = (state, action) => {
  //console.log(state); // array of availableTimes
  //console.log(action); // date selected
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function BookingPage() {
  const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

  return (
    <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
  );
}

export default BookingPage;

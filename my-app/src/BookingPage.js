import BookingForm from "./BookingForm.js";
import Nav from "./Nav.js";
import Header from "./Header.js";
import {useReducer} from "react";
import { useNavigate } from "react-router-dom";
import {fetchAPI, submitAPI} from "./api.js";

const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.type));
}

const BookingPage = function() {
  const initializeTimes = fetchAPI(new Date());
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();
  const submitForm = function(formData) {
      if (submitAPI(formData)) {
        navigate("/confirmation");
      }
  }

  return (
    <>
      <Header />
      <Nav />
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm} />
    </>
  );
}

export default BookingPage;

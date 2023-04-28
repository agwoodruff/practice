import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

function BookingForm(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("0");
  const [occassion, setOccassion] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setDate("");
    setGuests("0");
    setOccassion("");
    setTime("");
    console.log("Form submitted");
    props.submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1> Book Now </h1>
      <label htmlFor="res-name"> Name: </label>
      <input required type="text" id="res-name" value={name}
      onChange={(e) => {
                setName(e.target.value);
                if (e.target.value.length < 1) {
                  setErrors(prevState => ({
                      ...prevState,
                      name: 'Please enter your name'
                  }));
                  document.getElementById("res-name").style.border="2px solid red";
                } else {
                  setErrors(prevState => ({
                      ...prevState,
                      name: ''
                  }));
                  document.getElementById("res-name").style.border="none";
                }
              }
            }
      onBlur={(e) => {
          if (e.target.value.length < 1) {
            setErrors(prevState => ({
                ...prevState,
                name: 'Please enter your name'
            }));
            document.getElementById("res-name").style.border="2px solid red";
          } else {
            setErrors(prevState => ({
                ...prevState,
                name: ''
            }));
            document.getElementById("res-name").style.border="none";
          }
        }
      }
      />
      <span className='error'>{errors.name}</span>
      <label htmlFor="res-date"> Date: </label>
      <input required type="date" name="res-date" id="res-date" value={date}
      onChange={(e) => {
                setDate(e.target.value);
                props.setAvailableTimes({type:e.target.value});
                if (e.target.value.length < 1) {
                  setErrors(prevState => ({
                      ...prevState,
                      date: 'Please choose a date'
                  }));
                  document.getElementById("res-date").style.border="2px solid red";
                } else {
                  setErrors(prevState => ({
                      ...prevState,
                      date: ''
                  }));
                  document.getElementById("res-date").style.border="none";
                }
              }
      }
      onBlur={(e) => {
          if (e.target.value.length < 1) {
            setErrors(prevState => ({
                ...prevState,
                date: 'Please choose a date'
            }));
            document.getElementById("res-date").style.border="2px solid red";
          } else {
            setErrors(prevState => ({
                ...prevState,
                date: ''
            }));
            document.getElementById("res-date").style.border="none";
          }
        }
      } />
      <span className='error'>{errors.date}</span>
      <label htmlFor="res-time"> Time: </label>
      <select required id="res-time" value={time}
      onChange={(e) => {
                setTime(e.target.value);
                if (e.target.value.length < 1) {
                  setErrors(prevState => ({
                      ...prevState,
                      time: 'Please choose a time'
                  }));
                  document.getElementById("res-time").style.border="2px solid red";
                } else {
                  setErrors(prevState => ({
                      ...prevState,
                      time: ''
                  }));
                  document.getElementById("res-time").style.border="none";
                }
              }
            }
      onBlur={(e) => {
          if (e.target.value.length < 1) {
            setErrors(prevState => ({
                ...prevState,
                time: 'Please choose a time'
            }));
            document.getElementById("res-time").style.border="2px solid red";
          } else {
            setErrors(prevState => ({
                ...prevState,
                time: ''
            }));
            document.getElementById("res-time").style.border="none";
          }
        }
      }
      disabled={!date}>
        <option value="">Please select</option>
        {props.availableTimes.map((availTime) => (
          <option key={availTime} id="res-time" data-testid="res-time">{availTime}</option>
        ))}
      </select>
      <span className='error'>{errors.time}</span>
      <label htmlFor="guests">Number of guests: {guests} </label>
      <input
        id="guests"
        type="range"
        min="0"
        max="10"
        value={guests}
        onChange={(e) => {
                  setGuests(e.target.value);
                  if (e.target.value == "0") {
                    setErrors(prevState => ({
                        ...prevState,
                        guests: 'Please choose how many guests will be there'
                    }));
                    document.getElementById("guests").style.border="2px solid red";
                  } else {
                    setErrors(prevState => ({
                        ...prevState,
                        guests: ''
                    }));
                    document.getElementById("guests").style.border="none";
                  }
                }
              }
        onBlur={(e) => {
            if (e.target.value == "0") {
              setErrors(prevState => ({
                  ...prevState,
                  guests: 'Please choose how many guests will be there'
              }));
              document.getElementById("guests").style.border="2px solid red";
            } else {
              setErrors(prevState => ({
                  ...prevState,
                  guests: ''
              }));
              document.getElementById("guests").style.border="none";
            }
          }
        }
        required
      />
      <span className='error'>{errors.guests}</span>
      <FontAwesomeIcon icon={faChampagneGlasses} id="champagne-icon"/>
      <select
        required
        name="occasion"
        id="occassion"
        value={occassion}
        onChange={(e) => {
                  setOccassion(e.target.value);
                  if (e.target.value.length < 1) {
                    setErrors(prevState => ({
                        ...prevState,
                        occasion: 'Please choose the occasion'
                    }));
                    document.getElementById("occassion").style.border="2px solid red";
                    document.getElementById("arrow-up-icon").style.display="none";
                    document.getElementById("arrow-down-icon").style.display="block";
                    document.getElementById("occassion").style.background = "#EDEFEE";
                    document.getElementById("occassion").style.color = "#495E57";
                    document.getElementById("champagne-icon").style.display="block";
                  } else {
                    setErrors(prevState => ({
                        ...prevState,
                        occasion: ''
                    }));
                    document.getElementById("occassion").style.border="none";
                    document.getElementById("arrow-up-icon").style.display="block";
                    document.getElementById("arrow-down-icon").style.display="none";
                    document.getElementById("occassion").style.background = "#495E57";
                    document.getElementById("occassion").style.color = "white";
                    document.getElementById("champagne-icon").style.display="none";
                  }
                }
              }
        onBlur={(e) => {
            if (e.target.value.length < 1) {
              setErrors(prevState => ({
                  ...prevState,
                  occasion: 'Please choose the occasion'
              }));
              document.getElementById("occassion").style.border="2px solid red";
            } else {
              setErrors(prevState => ({
                  ...prevState,
                  occasion: ''
              }));
              document.getElementById("occassion").style.border="none";
            }
          }
        }>
        <option value="">Occasion</option>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
      <FontAwesomeIcon icon={faChevronDown} id="arrow-down-icon"/>
      <FontAwesomeIcon icon={faChevronUp} id="arrow-up-icon"/>
      {errors.occasion.length > 0 && <span className='error'>{errors.occasion}</span>}
      <button aria-label="On Click" disabled={!name || !date || !guests || !occassion || !time || guests == "0"} type="submit"> Make Your Reservation </button>
    </form>
  );
}

export default BookingForm;

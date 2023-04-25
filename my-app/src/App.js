import './App.css';
import Main from "./Main.js";
import BookingPage from "./BookingPage.js";
import Specials from "./Specials.js";
import Chicago from "./Chicago.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
      <Routes> 
        <Route path="/" element={<Main />}></Route>
        <Route path="#About" element={<Chicago />}></Route>
        <Route path="#special" element={<Specials />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
  );
}

export default App;

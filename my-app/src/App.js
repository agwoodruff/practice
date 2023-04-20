import './App.css';
import Header from "./Header.js";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import BookingPage from "./BookingPage.js";
import Specials from "./Specials.js";
import Chicago from "./Chicago.js";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Main />}></Route>
        <Route path="/about" element={<Chicago />}></Route>
        <Route path="/special" element={<Specials />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Header>
      </Header>
      <Nav>
      </Nav>
      <Main />
      <Footer />
    </>
  );
}

export default App;

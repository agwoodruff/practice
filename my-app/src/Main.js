import CallToAction from "./CallToAction.js";
import Specials from "./Specials.js";
import CustomersSay from "./CustomersSay.js";
import Chicago from "./Chicago.js";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
//import { Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <>
    <Header />
    <Nav />
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
    <Footer />
    </>
  );
}

export default Main;

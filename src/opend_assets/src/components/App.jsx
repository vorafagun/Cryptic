import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./Item";
import Minter from "./Minter";
import { AuthClient } from "../../../node_modules/@dfinity/auth-client/lib/cjs/index";
import End from "./End";
import { redirect } from "react-router-dom";


function App(props) {
  return (
    <div className="App">
      <Header authClient = {props.authClient}/>
      <Footer />
    </div>
  );
}

export default App;

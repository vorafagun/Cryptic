import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Principal } from "@dfinity/principal";
import { AuthClient } from "../../../node_modules/@dfinity/auth-client/lib/cjs/index";
import End from "./components/End";
import Header from "./components/Header";
// import { AuthClient  } from "@dfinity/auth-client";

const CURRENT_USER_ID = Principal.fromText("2vxsx-fae");
export default CURRENT_USER_ID;

const init = async () => {
  const authClient = await AuthClient.create();

  if(await authClient.isAuthenticated()){
    handleAuthenticated(authClient);
  }
  else{
    ReactDOM.render(<End/>, document.getElementById("root"));
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuthenticated(authClient);
      }
    })
  }
};

async function handleLogout(authClient){
  await authClient.logout();
}

async function handleAuthenticated(authClient){
  ReactDOM.render(<App authClient = {authClient}/>, document.getElementById("root"));  
}

init();

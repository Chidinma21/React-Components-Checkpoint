// import logo from "./logo.svg";
import React from "react";
import FullName from "./Component/Profile/fullName.js";
import Address from "./Component/Profile/address.js";
import ProfilePhoto from "./Component/Profile/profilePhoto.js";
import "./App.css";

const App = () => (
  <div className="App">
    <ProfilePhoto />
    <hr />
    <FullName />
    <Address />
    <hr />
  </div>
);
export default App;

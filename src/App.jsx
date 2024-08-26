import { useState } from "react";
import "./App.css";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

//const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
//const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  return (
    <div className="container">
      <LeftBar />
      <div className=" container-right flex-column ">
        <TopBar></TopBar>
        <div className="cards"></div>
      </div>
    </div>
  );
}

export default App;

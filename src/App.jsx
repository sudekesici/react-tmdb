import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./api/tmdb";
import { setMovies } from "./redux/moviesSlice";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MoviesPage from "./pages/MoviesPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      dispatch(setMovies(movies));
    };

    getMovies();
  }, [dispatch]);

  return (
    <div className="container">
      <Sidebar />
      <div className="container-right flex-column">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-games" element={<MoviesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

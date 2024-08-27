import React from "react";
import { useSelector } from "react-redux";

function MoviesPage() {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="movies-container">
      {movies.length > 0 ? (
        <div className="">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default MoviesPage;

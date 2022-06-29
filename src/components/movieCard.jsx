/* eslint-disable no-unused-vars */
import React from 'react';

const MovieCard = ({ movie }) => (
    <div className="movie">
      <div className="movie-year">
        <p>{movie.Year}</p>
      </div>
      <div className="movie-img">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
          alt={movie.Title}
        />
      </div>
      <div className="movie-title">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
);

export default MovieCard;
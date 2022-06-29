/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MovieCard from './components/movieCard.jsx';

// ece36687
const API_URL = 'https://www.omdbapi.com?apikey=ece36687';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title} `);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Iron man');
  }, []);

  return (
    <div className="app">
      <h1>Movie land</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => searchMovies(searchTerm)}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
      {
        movies?.length > 0
          ? (
          <div className="container">
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))
            }
          </div>
          ) : (
          <div className="empty">
            <p>No movies found</p>
          </div>
          )
      }
    </div>
  );
};

export default App;
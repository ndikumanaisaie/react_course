/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MovieCard from './components/movieCard.jsx';

// ece36687
const API_URL = 'https://www.omdbapi.com?apikey=ece36687';

const movie1 = {
  Title: 'Italian Spiderman',
  Year: '2007',
  imdbID: 'tt2705436',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg',
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title} `);
    const data = await response.json();
    console.log(data);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Iron man');
  }, []);

  return (
    <div className="app">
      <h1>Movie land</h1>
      <div className="search">

        <input
          type="text"
          placeholder ="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src="{searchIcon}"
          alt="search Icon"
          onClick={() => searchMovies(searchTerm)}
        />
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
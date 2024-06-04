import './App.css';
import React, { useState } from 'react';
import MovieList from './MovieList';
import GenreFilter from './GenreFilter';
import { movies, genres } from './data';

function App() {
  const [sortedMovies, setSortedMovies] = useState([]);

  const handleGenreClick = (genre) => {
    console.log(`Selected Genre: ${genre}`);
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    const sorted = filteredMovies.sort((a, b) => a.title.localeCompare(b.title)); // Sorting alphabetically by movie title
    setSortedMovies(sorted);
  };

  const handleResetClick = () => {
    setSortedMovies([]);
  };

  return (
    <div className="container">
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} onGenreClick={handleGenreClick} onResetClick={handleResetClick}/>
      <MovieList movies={sortedMovies.length ? sortedMovies : movies} />
    </div>
  );
}

export default App;


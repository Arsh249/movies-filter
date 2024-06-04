// GenreFilter.js
import React from 'react';

function GenreFilter({ genres, onGenreClick, onResetClick }) {

  return (
    <div className='genre'>
      <h2>Filter by Genre</h2>
      <div>
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onGenreClick(genre)}>
            {genre}
          </button>
        ))}
        <button className='reset' onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
}

export default GenreFilter;

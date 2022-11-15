import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className='card bg-dark m-2' style={{ width: '314px' }}>
          <img className='rounded mt-3' src={movie.Poster} alt='movie'></img>
          <div
            className='card-body'
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <p className='card-text text-center fw-bold'>
              {movie.Title} - {movie.Year}
            </p>
            <div className='btn btn-dark border d-flex justify-content-center align-items-center'>
              <FavouriteComponent />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;

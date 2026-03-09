import React from 'react'
import { getPopularMovies } from '../services/apiServices'
const Movies = () => {
  getPopularMovies();
  return (
    <div>
      movies
    </div>
  )
}

export default Movies

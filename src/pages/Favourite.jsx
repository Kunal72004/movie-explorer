import React from 'react'
import { getFav } from '../components/fav'
import MovieCard from '../components/MovieCard';

const Favourite = () => {
  const favs = getFav();
  console.log(favs);
  
  return (
    <div>
      favourite
    </div>
  )
}

export default Favourite

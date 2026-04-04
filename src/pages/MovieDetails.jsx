import React from 'react'
import { getMovieDetails } from '../services/apiServices'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addToFav,removeFromFav,isFav } from '../components/fav'
import { toast } from 'react-toastify'

const MovieDetails = () => {
  const {id} = useParams();
  const [movie,setMovie] = useState(null);
  const [fav,setFav] = useState(false);
  return (
    <div>
      MovieDetails
    </div>
  )
}

export default MovieDetails

import React from 'react'
import { getPopularMovies } from '../services/apiServices'
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  const [movies,setMovies] = useState([]);
  const [search, setSerach] = useState("");
  const [minRating,setMinRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page,setPage] = useState(1);

   const fetchPopularMovies = async(page=1)=>{
        try {
            setLoading(false);
            const data = await getPopularMovies(page);
            setMovies(data || []);
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
      fetchPopularMovies(page);
    },[page])

    const filteredMovies = movies.filter((movie)=>{
      const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchRating = movie.vote_average >= minRating;

      return matchSearch && matchRating;
    })
    

    if(loading){
      return <div className='min-h-screen flex items-center justify-center'>
        <h2 className='text-xl font-semibold animate-pulse'>Loading Movies...</h2>
      </div>
    }

  return (
    <div>
      movies
    </div>
  )
}

export default Movies

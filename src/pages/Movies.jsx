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
    <div className='min-h-screen bg-gray-200 py-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>Popular Movies</h1>
      <div className=' max-w-4xl mx-auto flex gap-4 mb-8 px-4 items-center flex-col sm:flex-row'>
        <input type="text" placeholder='Search Movies...' value={search} onChange={(e)=>setSerach(e.target.value)} className='w-full sm:flex-1 px-5 py-3 rounded-xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition' />
        <select value={minRating} name="" id="" onChange={(e)=>setMinRating(e.target.value)} className='w-full  sm:w-48 border border-gray-300 px-5 py-3 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500 transition'>
          <option value="0">All Rating</option>
          <option value="5">⭐ 5+</option>
          <option value="6">⭐ 6+</option>
          <option value="7">⭐ 7+</option>
          <option value="8">⭐ 8+</option>
        </select>
      </div>
      {filteredMovies.length === 0 ? (<p className='text-center text-gray-700 text-lg font-semibold'>No Movies Found 😅</p>):(
        <div>
          {filteredMovies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies

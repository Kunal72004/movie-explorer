import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import {addToFav,removeFromFav,isFav} from './fav'

const MovieCard = ({ movie }) => {
  const [fav, setFav] = useState(isFav(movie.id));

  const toogleFav = ()=>{
    if(fav){
      removeFromFav(movie.id);
      toast.info(`${movie.title} remove from Favourits`);
    }else{
      addToFav(movie);
      toast.success(`${movie.title} added to Favourites`)
    }
      setFav(!fav);

  }
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden relative">
      <button className="absolute top-2 right-2" onClick={toogleFav}>{fav ? "🧡" : "🩶"}</button>
      <img
        className="rounded  w-full h-72 object-cover"
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="bg-yellow-500 px-2 py-1 rounded-md font-bold text-sm">⭐ {movie.vote_average}</span>
          <Link className="text-blue-600 font-medium"> View Details ➡️</Link>
        </div>
      </div>
     
    </div>
  );
};

export default MovieCard;

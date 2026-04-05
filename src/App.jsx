import Home from './pages/Home'
import Movies from './pages/Movies'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import Error from './pages/Error'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie-details/:id' element={<MovieDetails/>}/>
        <Route path='/fav' element={<Favourite/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App

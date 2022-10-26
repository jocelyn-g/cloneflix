import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Movies from '../views/Movies';
import Series from '../views/Series';
import Favorite from '../views/Favorite';
import SearchMovies from '../views/SearchView';

const Navigation = () => {
    
    return (
        
        <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/search" element={<SearchMovies />}/>
              <Route path="/movies" element={<Movies />}/>
              <Route path="/series" element={<Series />}/>
              <Route path="/favorite" element={<Favorite />}/>
        </Routes>
    )
}

export default Navigation
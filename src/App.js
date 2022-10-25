import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Search';
import Home from './views/Home';
import Movies from './views/Movies';
import Series from './views/Series';
import Favorite from './views/Favorite';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>cloneflix</h1>
        </header>
        <nav>
          <ul>
            <a href="./components/Search"><li>Search</li></a>
            <a href="/"><li>Home</li></a>
            <a href="/movies"><li>Movies</li></a>
            <a href="/series"><li>Series</li></a>
            <a href="/favorite"><li>Favorite</li></a>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movies" element={<Movies />}/>
            <Route path="/series" element={<Series />}/>
            <Route path="/favorite" element={<Favorite />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

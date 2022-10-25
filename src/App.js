import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Movies from './views/Movies';
import Series from './views/Series';
import Favorite from './views/Favorite';
import Presentation from './components/Presentation';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>cloneflix</h1>
        </header>
        <div className='main'>
          <nav>
            <ul>
              <a href="/search"><li>Search</li></a>
              <a href="/"><li>Home</li></a>
              <a href="/movies"><li>Movies</li></a>
              <a href="/series"><li>Series</li></a>
              <a href="/favorite"><li>Favorite</li></a>
            </ul>
          </nav>
          <div>
          <Presentation/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/movies" element={<Movies />}/>
              <Route path="/series" element={<Series />}/>
              <Route path="/favorite" element={<Favorite />}/>
          </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './components/Search';
import './components/Row';
import Navigation from './components/Navigation';

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
              <a href="/Movies"><li>Movies</li></a>
              <a href="/series"><li>Series</li></a>
              <a href="/favorite"><li>Favorite</li></a>
            </ul>
          </nav>
          <div>
            <Navigation/>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

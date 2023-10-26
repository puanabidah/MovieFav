import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from './api';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt="poster-film"
          />
          <div className="Movie-title">{movie.title}</div>
          <div className="Movie-date">Release date: {movie.release_date}</div>
          <div className="Movie-rate"> Rating: {movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      <Navigation />
      <Home />
      <header className="App-header" id="movies">
        <h1>TRENDING MOVIES</h1>
        <input
          type="text"
          placeholder="cari film kesayangan.."
          className="Movie-search rounded"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default App;

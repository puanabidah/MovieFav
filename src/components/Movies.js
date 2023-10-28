import { getMovieList, searchMovie } from '../api';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

export default function Movies() {
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
}

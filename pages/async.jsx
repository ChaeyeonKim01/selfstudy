import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieList() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const movie = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
      console.log(movie);

      setMovies(movie.data.data.movies);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section>
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading..</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <div className="movie_data">
                <h3 className="movie_title" style={{}}>
                  {movie.title}
                </h3>
                <h5 className="movie_year">{movie.year}</h5>
                <ul className="genres">
                  {movie.genres.map((genre, index) => (
                    <li key={index} className="genres_genre">
                      {genre}
                    </li>
                  ))}
                </ul>
                <p className="movie_summary">
                  {movie.summary.slice(0, 140)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieList;

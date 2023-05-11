import axios from "axios";
import React, { useEffect, useState } from "react";

function Movie5() {
  const [movieData, setMovieData] = useState<any>();
  const getMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${1}`
    );
    setMovieData(res.data);
  };

  useEffect(() => {
    getMovie();
  });
  return <div></div>;
}

export default Movie5;

import axios from "axios";
import React, { useEffect, useState } from "react";

function Index() {
  const [movieData, setMovieData] = useState<any>();

  const getMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${1}`
    );
    setMovieData(res.data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log("movieData", movieData);
  }, [movieData]);

  return (
    <div>
      {movieData?.results?.map((el) => (
        <div key={el.id}>
          {el.title}
          <img src={`http://image.tmdb.org/t/p/w1280${el.backdrop_path}`} />
        </div>
      ))}
    </div>
  );
}

export default Index;

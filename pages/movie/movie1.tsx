import axios from "axios";
import React, { useEffect, useState } from "react";

function Movie1() {
  const [movieData, setMovieData] = useState<any>();
  const getMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${1}`
    );
    //console.log(res);
    setMovieData(res.data); // res.data console 창에서 불러온 정보 중 data만을 추출.
  };
  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

  return (
    <div>
      {movieData?.results?.map((el: any) => (
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {el.title}
          </p>
          <img src={`http://image.tmdb.org/t/p/w1280${el.backdrop_path}`} />
        </div>
      ))}
    </div>
  );
}

export default Movie1;

// O rfce 로 틀을 만든다.
// O function 이름은 무조건 대문자로.
// O 비동기 통신이라 useEffect를 사용해 처음 불러오는 것부터 한다.
// O movie API를 넣는다.
// O movie 데이터를 가져온다.
// movie title과 image만 가져온다.
// map을 써서 반복한다.

// useEffect 는 어떤 상태값이 변경되었을 때 동작하는 함수를 작성한다.
// https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${1}
// http://image.tmdb.org/t/p/w1280${el.backdrop_path}

import axios from "axios";
import React, { useEffect, useState } from "react";

function Movie2() {
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
        <div>
          {el.title}
          <img src={`http://image.tmdb.org/t/p/w1280${el.backdrop_path}`} />
        </div>
      ))}
    </div>
  );
}

export default Movie2;

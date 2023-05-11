import Layout from "@/component/layouts";
import Header from "@/component/layouts/Header";
import MovieLayout from "@/component/layouts/pageLayouts/MovieLayout";
import Info from "@/component/pageComp/Info";
import Thumb from "@/component/pageComp/Thumb";
import { MovieWrap } from "@/component/pageComp/movie/style";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Movie4() {
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
    <MovieLayout>
      <MovieWrap>
        {movieData?.results?.map((el: any) => (
          <div className="list_item" key={el.id}>
            <Thumb imgsrc={el.backdrop_path} />
            <Info
              id={el.id}
              title={el.title}
              date={el.release_date.substring(0, 4)}
              overview={el.overview.substring(0, 200) + "..."}
            />
          </div>
        ))}
      </MovieWrap>
    </MovieLayout>
  );
}

export default Movie4;

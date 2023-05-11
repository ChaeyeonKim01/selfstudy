import MovieLayout from "@/component/layouts/pageLayouts/MovieLayout";
import Info from "@/component/pageComp/Info";
import Thumb from "@/component/pageComp/Thumb";
import { MovieWrap } from "@/component/pageComp/movie/style";
import axios from "axios";
import React from "react";

function index2({ data }: any) {
  console.log("data", data);
  return (
    <MovieLayout>
      <MovieWrap>
        {data?.results?.map((el: any) => (
          <div className="list_item">
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

export default index2;

// export async function getServerSideProps() {
//   // 서버에서 데이터를 가져옴
//   const response = await axios.get(
//     `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${1}`
//   );

//   // 데이터를 props로 전달
//   return {
//     props: {
//       data: response.data,
//     },
//   };
// }

export const getStaticProps = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=${1}`
  );

  return {
    props: {
      data: response.data,
    },
    revalidate: 60, // 60초마다 페이지를 리프레시합니다.
  };
};

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function index() {
  const router = useRouter();
  const [movie, setMovie] = useState<any>();

  const fetchCollection = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${router.query.id}?api_key=844dba0bfd8f3a4f3799f6130ef9e335`
      );
      console.log(response);
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchCollection();
    }
  }, [router.query.id]);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div
      onClick={() => {
        router.push("/movie");
      }}
    >
      {movie?.title}
    </div>
  );
}

export default index;

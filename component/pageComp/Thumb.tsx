import React from "react";
import { ThumbWrap } from "./movie/style";

function Thumb({ imgsrc }: { imgsrc: string }) {
  return (
    <ThumbWrap>
      <img src={`http://image.tmdb.org/t/p/w1280${imgsrc}`} />
    </ThumbWrap>
  );
}

export default Thumb;

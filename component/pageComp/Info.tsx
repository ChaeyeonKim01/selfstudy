import React from "react";
import { InfoWrap } from "./movie/style";
import Link from "next/link";

// 타입스크립트
interface IInfo {
  id: number;
  title: string;
  date: string;
  overview: string;
}

function Info({ id, title, date, overview }: IInfo) {
  console.log("title, date, overview", title, date, overview);
  return (
    <Link href={`/movie/${id}`}>
      <InfoWrap>
        <p className="tit">{title}</p>
        <p className="date">{date}</p>
        <p className="overview">{overview}</p>
      </InfoWrap>
    </Link>
  );
}

export default Info;

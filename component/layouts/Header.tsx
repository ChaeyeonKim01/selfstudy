import React from "react";
import { HeaderWrap } from "./style";

function Header() {
  return (
    <HeaderWrap>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>Movie</li>
          <li>Weather</li>
          <li>Quiz</li>
        </ul>
      </nav>
    </HeaderWrap>
  );
}

export default Header;

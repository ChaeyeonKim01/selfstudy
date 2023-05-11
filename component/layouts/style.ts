import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  height: 100px;
  h1 {
    font-size: 40px;
  }
  nav {
    ul {
      display: flex;
    }
    li {
      padding: 10px 20px;
      font-size: 20px;
    }
  }
`;

export const FooterWrap = styled.div`
  background-color: rgb(44, 44, 44);
  display: block;
  // align-items: center;
  text-align: center;
  nav {
    height: 40px;
    ul {
    }
    li {
      color: rgb(255, 255, 255);
      font-size: 10px;
    }
  }
`;

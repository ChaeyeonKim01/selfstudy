import { css } from "@emotion/react";

const enFontTypes = [100, 200, 300, "regular", 500, 600, 700, 800, 900];
const krFontTypes = [100, 300, "regular", 500, 700, 900];
const solanoTypes = [300, 400, 500, 600, 700];

const montserrat = enFontTypes.map((weight) => {
  let fontWeight;
  if (weight === "regular") {
    fontWeight = "normal";
  } else {
    fontWeight = weight;
  }

  return css`
    @font-face {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: ${fontWeight};
      src: local("montserrat"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.eot?#iefix")
          format("embedded-opentype"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.woff2")
          format("woff2"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.woff")
          format("woff"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.ttf")
          format("truetype"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/montserrat-v18-latin-${weight}.svg#Montserrat")
          format("svg");
    }
  `;
});

const notoSansKR = krFontTypes.map((weight) => {
  let fontWeight;
  if (weight === "regular") {
    fontWeight = "normal";
  } else {
    fontWeight = weight;
  }

  return css`
    @font-face {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: ${fontWeight};
      src: local("Noto Sans KR"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.eot?#iefix")
          format("embedded-opentype"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.woff2")
          format("woff2"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.woff")
          format("woff"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/noto-sans-kr-v21-korean-${weight}.svg#NotoSansKR")
          format("svg");
    }
  `;
});

const solanoFT = solanoTypes.map((weight) => {
  return css`
    @font-face {
      font-family: "solano";
      src: url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/solano-${weight}")
          format("woff2"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/solano-${weight}-2")
          format("woff"),
        url("https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/font/solano-${weight}-3")
          format("opentype");
      font-display: auto;
      font-style: normal;
      font-weight: ${weight};
      font-stretch: normal;
    }
  `;
});

//CSS Variables Setting

/*=============================================
=                  Colors                     =
=============================================*/

const COLOR = {
  orange: "#FF4600",
  bluedark: "#171C8F",
  white: "#fff",
  black: "#000",
  gray: "#707070",
  inputBorder: "#ddd",
  loadingbg: "#e5e5e5",
};

/* Font sizes */
const FONT_SIZES = {
  h2: "4.8rem",
  h3: "6.5rem",
  h4: "6.5rem",
  startH4: "4.8rem",
  subMainVisualTxt1: "6.4rem",
  subMainVisualTxt2: "4.8rem",
  subTitle: "3.2rem",
  desc: "1.8rem",
  basicTxt: "2.4rem",
  tab: "2rem",
  titleNo: "6.5rem",
  inputS: "29rem",
  inputM: "62rem",
  inputL: "84rem",
  inputHeight: "5.6rem",
};

const forVariables = (obj: any, fn: any) =>
  Object.entries(obj).map(fn).join("\n");

const createVariables = (property: any, varName: any) =>
  forVariables(
    property,
    ([name, value]: any) => `--${varName}-${name} : ${value};`
  );

// const createSizeVariables = (sizes: any, varName: any) =>
//   forVariables(sizes, ([name, percentage]: any) => `--${varName}-${name} : ${percentage}rem;`);

const reset = css`
  /* CSS Document */

  :root {
    ${createVariables(FONT_SIZES, "size")}
    ${createVariables(COLOR, "color")}
    --swiper-navigation-size : 8rem;
  }

  /* Type Selector */
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
    color: var(--color-black);
  }
  html {
    /* overflow: hidden;
    max-width: 100vw; */
    font-size: 10px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    overflow-x: hidden;
    max-width: 100vw;
    color: var(--color-black);

    &.overflowhidden {
      overflow: hidden;
    }
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  p,
  blockquote,
  button,
  figure,
  table {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: normal;
  }
  img {
    width: 100%;
  }
  img,
  fieldset,
  button {
    border: 0 none;
  }

  ul,
  ol {
    list-style: none;
  }

  dt,
  dd {
    display: block;
  }
  /* input[type="radio"] {
    width: 14px;
    height: 14px;
    margin: 0;
    padding: 0;
  } */
  input[type="text"]::-ms-clear {
    display: none;
  }

  a {
    border: 0;
    cursor: pointer;
  }
  a:link {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: var(--color-orange);
    text-decoration: none;
  }
  a:active {
    color: #000;
    text-decoration: none;
  }
  em {
    font-style: normal;
  }

  //TypoSetting
  h2 {
    font-size: var(--size-h2);
    font-weight: bold;

    &.tit {
      text-align: center;
    }
  }

  //

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset,
  button {
    border: none;
  }
  hr,
  legend {
    display: none;
    clear: both;
  }
  iframe {
    width: 100%;
    height: 100%;
  }

  label {
    vertical-align: middle;
    cursor: pointer;
  }
  table caption {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    font-size: 0;
    line-height: 0;
  }

  textarea {
    width: 100%;
    height: 20rem;
    padding: 0.5rem;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    border-radius: 2px;
    box-sizing: border-box;
    overflow: auto;
    padding: 2.4rem;
  }
  /* input[type="checkbox"] {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border: none;
  }
  input[type="radio"] {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    border: none;
  } */
  *:-webkit-auto:fill {
    -webkit-box-shadow: 0 0 0px 100rem white inset;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed !important;
    border-spacing: 0;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  hr {
    display: none;
  }
  caption,
  legend {
    visibility: hidden;
    overflow: hidden;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
  }
  iframe {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .hiddenZone {
    display: none;
  }
  .hiddenZoneV {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    *visibility: hidden;
  }
  .screen_out {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  }

  .box_spinner {
    .location_indicator {
      position: relative;
      width: 3rem;
      height: 4rem;

      &:before,
      &:after {
        position: absolute;
        content: "";
      }
      &:before {
        left: 0.5rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100% 100% 100% 0;
        box-shadow: 0px 0px 0px 0.2rem var(--color-orange);
        background: var(--color-orange);
        -webkit-animation: mapping 1s linear infinite;
        -moz-animation: mapping 1s linear infinite;
        animation: mapping 1s linear infinite;
        -webkit-transform: rotate(-46deg);
        -moz-transform: rotate(-46deg);
        transform: rotate(-46deg);
      }
      &:after {
        width: 3rem;
        height: 1rem;
        border-radius: 100%;
        background-color: rgba(255, 70, 0, 0.2);
        top: 2.4rem;
        z-index: -1;
      }
    }
    @keyframes mapping {
      0% {
        top: 0;
      }
      50% {
        top: -0.5rem;
      }
      100% {
        top: 0;
      }
    }
  }

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -3rem;
    margin-left: -3rem;

    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
  }

  /*LOADER-7*/

  .loader-7 .line {
    width: 0.8rem;
    position: absolute;
    border-radius: 0.5rem;
    bottom: 0;
    background: linear-gradient(to bottom, #1ee95d, #5714ce);
  }

  .loader-7 .line1 {
    left: 0;
    -webkit-animation: line-grow 0.5s ease alternate infinite;
    animation: line-grow 0.5s ease alternate infinite;
  }

  .loader-7 .line2 {
    left: 2rem;
    -webkit-animation: line-grow 0.5s 0.2s ease alternate infinite;
    animation: line-grow 0.5s 0.2s ease alternate infinite;
  }

  .loader-7 .line3 {
    left: 4rem;
    -webkit-animation: line-grow 0.5s 0.4s ease alternate infinite;
    animation: line-grow 0.5s 0.4s ease alternate infinite;
  }

  @keyframes line-grow {
    0% {
      height: 0;
    }
    100% {
      height: 75%;
    }
  }

  #react-kakao-maps-sdk-map-container {
    .info_label {
      span {
        color: #fff;
      }
      padding: 0.7rem 2rem;
      border-radius: 5rem;
      font-size: 1.5rem;
      background: #005ad5;
      margin: -9.5rem 0 0 -0.9rem;
      position: relative;
      color: #fff;
      margin-left: -0.2rem;

      &:after {
        content: "";
        width: 0.8rem;
        height: 2rem;
        border: 2rem solid #005ad5;
        border-color: #005ad5 transparent transparent transparent;
        border-width: 1.5rem 0.5rem;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -0.4rem;
        box-sizing: border-box;
      }
    }
  }

  @media (min-width: 1400px) and (max-width: 1530px) {
    html {
      font-size: 9px;
    }
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    html {
      font-size: 8px;
    }
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    html {
      font-size: 7px;
    }
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    html {
      font-size: 6px;
    }
  }
  @media (min-width: 670px) and (max-width: 800px) {
    html {
      font-size: 5px;
    }
  }

  @media (min-width: 500px) and (max-width: 670px) {
    html {
      font-size: 3.7px;
    }
  }

  @media (min-width: 200px) and (max-width: 400px) {
    html {
      font-size: 2.5px;
    }
  }

  ${montserrat}
  ${notoSansKR}
  ${solanoFT}
`;

export default reset;

export const breakpoints = [200, 400, 670, 800, 1000];

export const mq = breakpoints.map(
  (i) =>
    `${`@media (min-width:${breakpoints[i]}px) and (max-width: ${
      breakpoints[i + 1]
    }px)`}`
);

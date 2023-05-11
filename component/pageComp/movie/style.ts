import styled from "@emotion/styled";
// import Info from "@/component/pageComp/Info";
// title={el.title}
// date={el.release_date.substring(0, 4)}
// overview={el.overview.substring(0, 200) + "..."}

export const MovieWrap = styled.div`
  display: grid;
  width: 1500px;
  margin: 0 auto;
  gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  img {
    display: block;
    width: 100%;
    margin-top: -20px;
  }
  .list_item {
    display: flex;
    width: 600px;
    height: 180px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
      0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    padding: 10px;
    border-radius: 3px;
  }
`;

export const ThumbWrap = styled.div`
  width: 300px;
`;

export const InfoWrap = styled.div`
  margin-left: 20px;
  .tit {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .date {
    font-size: 13px;
    margin-bottom: 18px;
  }
  .overview {
    font-size: 15px;
  }
`;

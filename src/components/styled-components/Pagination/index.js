import styled from "styled-components";

export const Pagination = styled.div`
  width: 50%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: black;
  text-shadow: 1px 1px 1px white;
  h2 {
    margin: 0;
  }
  div {
    text-align: center;
    width: 20%;
    border: black 1px solid;
    background-color: white;
    border-radius: 10px;
    :hover {
      border: white 1px solid;
      color: white;
      background: linear-gradient(
        270deg,
        rgba(30, 255, 0, 0.555),
        rgba(255, 0, 0, 0.555)
      );
    }
  }
  @media (max-width: 800px) {
    width: 50%;
    height: 40%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: black;
    text-shadow: 1px 1px 1px white;

    div {
      text-align: center;
      width: 40%;
      border: black 1px solid;
      background-color: white;
      border-radius: 10px;
      :hover {
        background: linear-gradient(
          270deg,
          rgba(30, 255, 0, 0.555),
          rgba(255, 0, 0, 0.555)
        );
      }
    }
  }
`;

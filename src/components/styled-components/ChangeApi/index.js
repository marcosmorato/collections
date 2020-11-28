import styled from "styled-components";

export const ChangeApi = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99vw;
  height: 10%;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 30%;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 5px;
    color: black;
    background-color: white;
    font-size: 110%;
    margin: 0 5px 0 5px;
    :hover {
      font-size: 130%;
      text-shadow: 1px 1px 1px black;
      border: 2px white solid;
      background: linear-gradient(
        270deg,
        rgba(30, 255, 0, 0.555),
        rgba(255, 0, 0, 0.555)
      );
      color: white;
    }
  }
  input {
    width: 15%;
    height: 30%;
    border-radius: 10px;
    border: 2px solid black;
    :focus {
      background-color: black;
      color: white;
      border-radius: 10px;
      border: 2px solid white;
    }
  }
`;

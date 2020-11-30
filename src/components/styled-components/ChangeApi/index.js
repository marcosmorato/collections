import styled from "styled-components";

export const ChangeApi = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99vw;
  height: 10%;
  margin: 0 5px 5px 0;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    height: 50%;
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
    height: 40%;
    border-radius: 10px;
    border: 2px solid black;

    :focus {
      background-color: black;
      color: white;
      border-radius: 10px;
      border: 2px solid white;
      font-size: 100%;
    }
  }
  @media (max-width: 1150px) {
    height: 10%;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      height: 50%;
      text-decoration: none;
      border: 2px solid black;
      border-radius: 5px;
      color: black;
      background-color: white;
      font-size: 100%;
      margin: 0 5px 0 5px;
      :hover {
        font-size: 100%;
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
      width: 25%;
      height: 60%;
      border-radius: 10px;
      border: 2px solid black;
      :focus {
        background-color: black;
        color: white;
        border-radius: 10px;
        border: 2px solid white;
      }
    }
  }
  @media (max-width: 800px) {
    a {
      font-size: 88%;
      width: 30%;
    }
  }
  @media (max-width: 450px) {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30%;
      height: 40%;
      text-decoration: none;
      border: 2px solid black;
      border-radius: 5px;
      color: black;
      background-color: white;
      font-size: 80%;
      margin: 0 5px 0 5px;
      :hover {
        font-size: 80%;
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
      width: 25%;
      height: 50%;
      border-radius: 10px;
      border: 2px solid black;
      :focus {
        background-color: black;
        color: white;
        border-radius: 10px;
        border: 2px solid white;
      }
    }
  }
`;

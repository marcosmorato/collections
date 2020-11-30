import styled from "styled-components";

export const ScaleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 230px;
  margin: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;

  background-color: white;
  width: 200px;
  height: 200px;
  :hover {
    background: linear-gradient(
      270deg,
      rgba(30, 255, 0, 0.555),
      rgba(255, 0, 0, 0.555)
    );
    button {
      background: linear-gradient(
        270deg,
        rgba(255, 0, 0, 0.555),
        rgba(30, 255, 0, 0.555)
      );
    }
  }
`;

export const Name = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 80%;
  text-shadow: 1px 1px 1px white;
  button {
    border: black 1px solid;
    border-radius: 5px;
    background-color: white;
    margin: 5px;
    img {
      width: 15px;
      height: 15px;
    }
    :hover {
      cursor: pointer;
      border-radius: 5px;
      background: linear-gradient(
        270deg,
        rgba(30, 255, 0, 0.555),
        rgba(255, 0, 0, 0.555)
      );
    }
  }
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  img {
    border: solid black 1px;
    border-radius: 10px;
    width: 80%;
    height: 150px;
  }
`;

export const NameFav = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100%;
  margin-bottom: 5px;
`;

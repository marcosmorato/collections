import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 20px;
  background-color: white;

  div {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      :hover {
        background-color: yellow;
        cursor: pointer;
        border-radius: 5px;
      }
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
`;

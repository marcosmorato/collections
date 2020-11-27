import { Card } from "../styled-components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const FavoritePokemon = ({ name, img }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);

  // useEffect(() => {
  //   axios.get(`${url}`).then((res) => {
  //     setInfoPokemon(res.data);
  //   });
  // }, [url]);

  return (
    <Card>
      <div>{name}</div>
      <img src={img} />
    </Card>
  );
};

export default FavoritePokemon;
// src={infoPokemon.sprites?.other["official-artwork"]["front_default"]}

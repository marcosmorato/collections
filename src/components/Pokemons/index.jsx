import { useState, useEffect } from "react";
import axios from "axios";

const Pokemons = ({ url }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);

  useEffect(() => {
    axios.get(`${url}`).then((res) => {
      console.log(res.data);
      setInfoPokemon(res.data);
    });
  }, [url]);
  return (
    <div>
      <div>{infoPokemon.name}</div>
      <img
        src={infoPokemon.sprites?.other["official-artwork"]["front_default"]}
      />
    </div>
  );
};

export default Pokemons;

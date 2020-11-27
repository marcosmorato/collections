// voltar infoPokemon até pages e manipular la a condição de addFavorite
import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../components/styled-components/Card/index";

const Pokemons = ({ url, addFavorite, favorite }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [favo, setFavo] = useState(false);

  useEffect(() => {
    axios.get(`${url}`).then((res) => {
      setInfoPokemon(res.data);
    });
  }, [url]);

  const conditionAddFavorite = () => {
    if (!favo) {
      setFavo(!favo);
      addFavorite(infoPokemon);
      console.log(favorite);
      console.log(infoPokemon);
    } else {
      setFavo(!favo);
    }
  };

  return (
    <Card>
      <div>
        {infoPokemon.name}
        <button onClick={conditionAddFavorite}>
          {favo === false ? (
            <img src="https://img.icons8.com/android/48/000000/star.png" />
          ) : (
            <img src="https://img.icons8.com/fluent/48/000000/star.png" />
          )}
        </button>
      </div>
      <img
        src={infoPokemon.sprites?.other["official-artwork"]["front_default"]}
      />
    </Card>
  );
};

export default Pokemons;

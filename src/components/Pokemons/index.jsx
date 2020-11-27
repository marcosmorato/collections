// voltar infoPokemon até pages e manipular la a condição de addFavorite
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Card } from "../../components/styled-components/Card/index";

const Pokemons = ({ url, addFavorite, favorite, removeFavorite }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [favo, setFavo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    axios.get(`${url}`).then((res) => {
      setInfoPokemon(res.data);
    });
    // console.log(location.pathname === "/pokemons");
  }, [url]);

  useEffect(() => {
    if (location.pathname === "/pokemons") {
      // console.log(favorite.length);

      const find = favorite?.find((e) => e.name === infoPokemon.name);
      if (find !== undefined) {
        console.log(find, "funciona?");
        setFavo(true);
      }
    }
  }, [infoPokemon]);

  const conditionAddFavorite = () => {
    if (!favo) {
      setFavo(!favo);
      addFavorite(infoPokemon);
      console.log(favorite, "add");
    } else {
      setFavo(!favo);
      removeFavorite(infoPokemon.name);
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

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Card,
  Img,
  Name,
  ScaleCard,
} from "../../components/styled-components/Card/index";
import { motion } from "framer-motion";

const Pokemons = ({ url, addFavorite, favorite, removeFavorite }) => {
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [fav, setFav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    axios.get(`${url}`).then((res) => {
      setInfoPokemon(res.data);
    });
  }, [url]);

  useEffect(() => {
    if (location.pathname === "/pokemons") {
      const find = favorite?.find((e) => e.name === infoPokemon.name);
      if (find !== undefined) {
        console.log(find, "funciona?");
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, [infoPokemon]);

  const conditionAddFavorite = () => {
    if (!fav) {
      setFav(!fav);
      addFavorite(infoPokemon);
      // console.log(favorite, "add");
    } else {
      setFav(!fav);
      removeFavorite(infoPokemon.name);
    }
  };

  return (
    <ScaleCard>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Card>
          <Name>
            {infoPokemon.name}
            <button onClick={conditionAddFavorite}>
              {fav === false ? (
                <img src="https://img.icons8.com/android/48/000000/star.png" />
              ) : (
                <img src="https://img.icons8.com/fluent/48/000000/star.png" />
              )}
            </button>
          </Name>
          <Img>
            <img
              src={
                infoPokemon.sprites?.other["official-artwork"]["front_default"]
              }
            />
          </Img>
        </Card>
      </motion.div>
    </ScaleCard>
  );
};

export default Pokemons;

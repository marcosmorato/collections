import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChangeApi } from "../../components/styled-components/ChangeApi";

import ListFavoritePokemon from "../../components/listFavoritePokemon/index";
import Img from "../../image/pokemon_logo.png";
import { Logo } from "../../components/styled-components/Logo";

const Favorite = ({ favorite }) => {
  return (
    <>
      <ChangeApi>
        <Link to="/">
          <span> show Rick And Morty</span>{" "}
        </Link>
        <Link to="/pokemons">
          <span>Voltar</span>
        </Link>
      </ChangeApi>
      <Logo>
        <img src={Img}></img>
      </Logo>
      <ListFavoritePokemon favorite={favorite}></ListFavoritePokemon>
    </>
  );
};

export default Favorite;

import { Link } from "react-router-dom";
import { ChangeApi } from "../../components/styled-components/ChangeApi";
import ListFavoriteRickAndMorty from "../../components/listFavoriteRickAndMorty/index";
import { LogoRick } from "../../components/styled-components/Logo/index";
import Img from "../../image/rickandmorty_logo.png";

const FavoriteRickAndMorty = ({ favoriteRick }) => {
  return (
    <>
      <ChangeApi>
        <Link to="/pokemons">
          <span>Show Pokemons</span>
        </Link>
        <Link to="/">
          <span>Voltar</span>
        </Link>
      </ChangeApi>
      <LogoRick>
        <img src={Img}></img>
      </LogoRick>
      <ListFavoriteRickAndMorty
        favoriteRick={favoriteRick}
      ></ListFavoriteRickAndMorty>
    </>
  );
};

export default FavoriteRickAndMorty;

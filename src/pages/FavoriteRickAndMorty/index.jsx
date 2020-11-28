import { Link } from "react-router-dom";
import { ChangeApi } from "../../components/styled-components/ChangeApi";
import ListFavoriteRickAndMorty from "../../components/listFavoriteRickAndMorty/index";

const FavoriteRickAndMorty = ({ favoriteRick }) => {
  console.log(favoriteRick);
  return (
    <>
      <ChangeApi>
        <Link to="/pokemons"> Show Pokemons </Link>
        <Link to="/">Voltar</Link>
      </ChangeApi>
      <ListFavoriteRickAndMorty
        favoriteRick={favoriteRick}
      ></ListFavoriteRickAndMorty>
    </>
  );
};

export default FavoriteRickAndMorty;

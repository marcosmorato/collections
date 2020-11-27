import { Link } from "react-router-dom";
import { ChangeApi } from "../../components/styled-components/ChangeApi";
import ListFavoritePokemon from "../../components/listFavoritePokemon/index";

const Favorite = ({ favorite }) => {
  console.log(favorite);
  return (
    <>
      <ChangeApi>
        <Link to="/"> show Rick And Morty </Link>
        <Link to="/pokemons">Voltar</Link>
      </ChangeApi>
      <ListFavoritePokemon favorite={favorite}></ListFavoritePokemon>
    </>
  );
};

export default Favorite;

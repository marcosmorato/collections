import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListPokemons from "../../components/listPokemons/index";
import { ChangePage } from "../../components/styled-components/ChangePage/index";
import { ChangeApi } from "../../components/styled-components/ChangeApi/index";
import { Pagination } from "../../components/styled-components/Pagination/index";
const GetPokemons = () => {
  const [listPokemon, setListPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(7);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`)
      .then((res) => {
        console.log(res.data.results);
        setListPokemon(res.data.results);
      });
  }, [page]);

  const Preview = () => {
    if (page > 0) {
      setPage(page - 20);
      setLimit(20);
    }
  };

  const Next = () => {
    if (page < totalPages * 20) {
      setPage(page + 20);
      console.log(page);
    }
    if (page === (totalPages - 1) * 20) {
      setLimit(11);
    }
  };

  return (
    <>
      <ChangeApi>
        <Link to="/"> show Rick And Morty </Link>
      </ChangeApi>
      <ChangePage>
        <Pagination>
          <div onClick={Preview}>{`< Previous`}</div>
          {page}
          <div onClick={Next}>{` Next >`}</div>
        </Pagination>
        <form>
          <input></input>
          <button>search</button>
        </form>
      </ChangePage>
      <ListPokemons listPokemon={listPokemon}></ListPokemons>
    </>
  );
};

export default GetPokemons;

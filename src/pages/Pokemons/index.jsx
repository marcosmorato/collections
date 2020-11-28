import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListPokemons from "../../components/listPokemons/index";
import { ChangePage } from "../../components/styled-components/ChangePage/index";
import { ChangeApi } from "../../components/styled-components/ChangeApi/index";
import { Pagination } from "../../components/styled-components/Pagination/index";

const GetPokemons = ({ favorite, setFavorite }) => {
  const [listPokemon, setListPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(7);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`)
      .then((res) => {
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

  const showPokemon = (e) => {
    setSearch(e.target.value);
    const searchPokemons = listPokemon.filter((d) => {
      return d.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    setFiltred(searchPokemons);
  };

  const addFavorite = (name) => {
    setFavorite([...favorite, name]);
  };

  const removeFavorite = (name) => {
    let x = favorite?.filter((ele) => ele.name !== name);
    // console.log(x);
    setFavorite(x);
    // console.log(x);
    // console.log(name);
  };

  return (
    <>
      <ChangeApi>
        <Link to="/"> show Rick And Morty </Link>
        <Link to="/favorite"> Favorites </Link>
      </ChangeApi>
      <ChangePage>
        <input onChange={showPokemon} value={search}></input>
        <Pagination>
          <div onClick={Preview}>{`< Previous`}</div>
          {page}
          <div onClick={Next}>{` Next >`}</div>
        </Pagination>
      </ChangePage>
      {search === "" ? (
        <ListPokemons
          favorite={favorite}
          addFavorite={addFavorite}
          listPokemon={listPokemon}
          removeFavorite={removeFavorite}
        ></ListPokemons>
      ) : (
        <ListPokemons
          favorite={favorite}
          addFavorite={addFavorite}
          listPokemon={filtred}
          removeFavorite={removeFavorite}
        ></ListPokemons>
      )}
    </>
  );
};

export default GetPokemons;

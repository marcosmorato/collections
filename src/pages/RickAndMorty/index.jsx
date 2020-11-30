import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListRickAndMorty from "../../components/listRickAndMorty/index";
import { ChangePage } from "../../components/styled-components/ChangePage/index";
import { ChangeApi } from "../../components/styled-components/ChangeApi/index";
import { Pagination } from "../../components/styled-components/Pagination/index";
import { LogoRick } from "../../components/styled-components/Logo";
import Img from "../../image/rickandmorty_logo.png";

const GetRickAndMorty = ({ favoriteRick, setFavoriteRick }) => {
  const [listPerson, setListPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [filtred, setFiltred] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setTotalPages(res.data.results.length);

        setListPerson(res.data.results);
      });
  }, [page]);

  const showPerson = (e) => {
    setSearch(e.target.value);
    const searchPerson = listPerson.filter((d) => {
      return d.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    });
    setFiltred(searchPerson);
  };

  const addFavorite = (name) => {
    setFavoriteRick([...favoriteRick, name]);
    // console.log(favoriteRick);
  };

  const removeFavorite = (name) => {
    let x = favoriteRick?.filter((ele) => ele.name !== name);
    setFavoriteRick(x);
    // console.log(favoriteRick);
  };

  return (
    <>
      <ChangeApi>
        <Link to="/pokemons">
          <span>Show pokemons</span>
        </Link>
        <input
          onChange={showPerson}
          value={search}
          placeholder="Search Bar"
        ></input>
        <Link to="/favoriteRick">
          <span> Favorites</span>
        </Link>
      </ChangeApi>
      <LogoRick>
        <img src={Img} />
      </LogoRick>
      <ChangePage>
        <Pagination>
          <div onClick={() => page > 1 && setPage(page - 1)}>
            {`< Previous`}
          </div>
          <h2 style={{ color: "white", textShadow: "1px 1px 1px black" }}>
            {page}
          </h2>
          <div
            onClick={() => page < totalPages && setPage(page + 1)}
          >{` Next >`}</div>
        </Pagination>
      </ChangePage>
      {search === "" ? (
        <ListRickAndMorty
          addFavorite={addFavorite}
          favoriteRick={favoriteRick}
          setFavoriteRick={setFavoriteRick}
          removeFavorite={removeFavorite}
          listPerson={listPerson}
        ></ListRickAndMorty>
      ) : (
        <ListRickAndMorty
          addFavorite={addFavorite}
          favoriteRick={favoriteRick}
          setFavoriteRick={setFavoriteRick}
          removeFavorite={removeFavorite}
          listPerson={filtred}
        ></ListRickAndMorty>
      )}
      {/* <ListRickAndMorty listPerson={listPerson}></ListRickAndMorty> */}
    </>
  );
};

export default GetRickAndMorty;

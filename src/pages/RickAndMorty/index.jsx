import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListRickAndMorty from "../../components/listRickAndMorty/index";
import { ChangePage } from "../../components/styled-components/ChangePage/index";
import { ChangeApi } from "../../components/styled-components/ChangeApi/index";
import { Pagination } from "../../components/styled-components/Pagination/index";

const GetRickAndMorty = () => {
  const [listPerson, setListPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setTotalPages(res.data.results.length);

        setListPerson(res.data.results);
      });
  }, [page]);

  return (
    <>
      <ChangeApi>
        <Link to="/pokemons">Show pokemons</Link>
      </ChangeApi>
      <ChangePage>
        <Pagination>
          <div onClick={() => page > 1 && setPage(page - 1)}>
            {`< Previous`}
          </div>
          {page}
          <div
            onClick={() => page < totalPages && setPage(page + 1)}
          >{` Next >`}</div>
        </Pagination>
        <form>
          <input></input>
          <button>search</button>
        </form>
      </ChangePage>
      <ListRickAndMorty listPerson={listPerson}></ListRickAndMorty>)
    </>
  );
};

export default GetRickAndMorty;

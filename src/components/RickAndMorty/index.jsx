import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Card } from "../styled-components/Card/index";

const RickAndMorty = ({
  favoriteRick,
  setFavoriteRick,
  removeFavorite,
  listPerson,
  person,
  species,
  addFavorite,
}) => {
  const [infoRick, setInfoRick] = useState([]);
  const [favo, setFavo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const find = favoriteRick?.find((e) => e.name === person.name);
      if (find !== undefined) {
        console.log(find, "funcionando");
        setFavo(true);
      } else {
        setFavo(false);
      }
    }
  }, [person]);

  const conditionAddFavorite = () => {
    if (!favo) {
      setFavo(!favo);
      addFavorite(person);
    } else {
      setFavo(!favo);
      removeFavorite(person.name);
      // console.log(favoriteRick, "removendo");
    }
  };

  return (
    <Card>
      <div>
        {person.name}
        <button onClick={conditionAddFavorite}>
          {favo === false ? (
            <img src="https://img.icons8.com/android/48/000000/star.png" />
          ) : (
            <img src="https://img.icons8.com/fluent/48/000000/star.png" />
          )}
        </button>
      </div>
      <img src={person.image} alt={person.name} />
    </Card>
  );
};

export default RickAndMorty;

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Img, Name, ScaleCard } from "../styled-components/Card/index";
import { motion } from "framer-motion";

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
    <ScaleCard>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Card>
          <Name>
            {person.name}

            <button onClick={conditionAddFavorite}>
              {favo === false ? (
                <img src="https://img.icons8.com/plasticine/100/000000/like--v2.png" />
              ) : (
                <img src="https://img.icons8.com/plasticine/400/000000/like--v1.png" />
              )}
            </button>
          </Name>
          <Img>
            <img src={person.image} alt={person.name} />
          </Img>
        </Card>
      </motion.div>
    </ScaleCard>
  );
};

export default RickAndMorty;

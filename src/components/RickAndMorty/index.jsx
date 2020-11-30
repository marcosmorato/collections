import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Img, Name, ScaleCard } from "../styled-components/Card/index";
import { motion } from "framer-motion";

const RickAndMorty = ({
  favoriteRick,
  removeFavorite,
  person,
  addFavorite,
}) => {
  const [fav, setFav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const find = favoriteRick?.find((e) => e.name === person.name);
      if (find !== undefined) {
        console.log(find, "funcionando");
        setFav(true);
      } else {
        setFav(false);
      }
    }
  }, [person]);

  const conditionAddFavorite = () => {
    if (!fav) {
      setFav(!fav);
      addFavorite(person);
    } else {
      setFav(!fav);
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
              {fav === false ? (
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

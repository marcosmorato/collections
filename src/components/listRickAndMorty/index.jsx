import RickAndMorty from "../RickAndMorty";
import { motion } from "framer-motion";
import { InfoPerson } from "../../components/styled-components/InfoPerson/index";

const ListRickAndMorty = ({
  favoriteRick,
  setFavoriteRick,
  removeFavorite,
  listPerson,
  addFavorite,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <InfoPerson>
          {listPerson.map((ele, idx, arr) => (
            <RickAndMorty
              favoriteRick={favoriteRick}
              setFavoriteRick={setFavoriteRick}
              removeFavorite={removeFavorite}
              listPerson={listPerson}
              key={idx}
              person={ele}
              addFavorite={addFavorite}
            ></RickAndMorty>
          ))}
        </InfoPerson>
      </motion.div>
    </>
  );
};

export default ListRickAndMorty;

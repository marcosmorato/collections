import FavoritePokemon from "../FavoritePokemon/index";
import { motion } from "framer-motion";
import { InfoPerson } from "../../components/styled-components/InfoPerson";
const ListFavoritePokemon = ({ favorite }) => {
  console.log(favorite.name, "favoritelist");

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <InfoPerson>
          {favorite.map((ele, idx, arr) => (
            <FavoritePokemon
              key={idx}
              name={ele.name}
              img={ele.sprites?.other["official-artwork"]["front_default"]}
            ></FavoritePokemon>
          ))}
        </InfoPerson>
      </motion.div>
    </>
  );
};

export default ListFavoritePokemon;

import FavoriteRickAndMorty from "../FavoriteRickAndMorty/index";
import { motion } from "framer-motion";
import { InfoPerson } from "../../components/styled-components/InfoPerson";

const ListFavoriteRickAndMorty = ({ favoriteRick }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <InfoPerson>
          {favoriteRick.map((ele, idx, arr) => (
            <FavoriteRickAndMorty
              key={idx}
              name={ele.name}
              image={ele.image}
            ></FavoriteRickAndMorty>
          ))}
        </InfoPerson>
      </motion.div>
    </>
  );
};

export default ListFavoriteRickAndMorty;

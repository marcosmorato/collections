import { Card, Img, NameFav } from "../styled-components/Card";
import { motion } from "framer-motion";

const FavoritePokemon = ({ name, img }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Card>
        <NameFav>
          <div>{name}</div>
        </NameFav>
        <Img>
          <img src={img} />
        </Img>
      </Card>
    </motion.div>
  );
};

export default FavoritePokemon;
// src={infoPokemon.sprites?.other["official-artwork"]["front_default"]}

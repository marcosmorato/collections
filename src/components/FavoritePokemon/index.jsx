import { Card, Img, NameFav, ScaleCard } from "../styled-components/Card";
import { motion } from "framer-motion";

const FavoritePokemon = ({ name, img }) => {
  return (
    <ScaleCard>
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
    </ScaleCard>
  );
};

export default FavoritePokemon;
// src={infoPokemon.sprites?.other["official-artwork"]["front_default"]}

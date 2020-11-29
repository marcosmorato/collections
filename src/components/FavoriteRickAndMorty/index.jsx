import { Card, Img, NameFav } from "../styled-components/Card/index";
import { motion } from "framer-motion";

const FavoriteRickAndMorty = ({ name, image }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Card>
        <NameFav>{name}</NameFav>
        <Img>
          <img src={image} />
        </Img>
      </Card>
    </motion.div>
  );
};

export default FavoriteRickAndMorty;

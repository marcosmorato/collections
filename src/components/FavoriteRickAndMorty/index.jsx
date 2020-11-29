import { Card, Img, NameFav, ScaleCard } from "../styled-components/Card/index";
import { motion } from "framer-motion";

const FavoriteRickAndMorty = ({ name, image }) => {
  return (
    <ScaleCard>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Card>
          <NameFav>{name}</NameFav>
          <Img>
            <img src={image} />
          </Img>
        </Card>
      </motion.div>
    </ScaleCard>
  );
};

export default FavoriteRickAndMorty;

import RickAndMorty from "../RickAndMorty";

import { motion } from "framer-motion";

import { InfoPerson } from "../../components/styled-components/InfoPerson/index";

const ListRickAndMorty = ({ listPerson }) => {
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
              key={idx}
              name={ele.name}
              image={ele.image}
            ></RickAndMorty>
          ))}
        </InfoPerson>
      </motion.div>
    </>
  );
};

export default ListRickAndMorty;

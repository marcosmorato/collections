import Pokemons from "../Pokemons";

import { motion } from "framer-motion";

import { InfoPerson } from "../../components/styled-components/InfoPerson/index";

const ListPokemons = ({ listPokemon }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <InfoPerson>
          {listPokemon.map((ele, idx, arr) => (
            <Pokemons key={idx} url={ele.url}></Pokemons>
          ))}
        </InfoPerson>
      </motion.div>
    </>
  );
};

export default ListPokemons;

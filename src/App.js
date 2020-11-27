import { Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
// import "./App.css";
import Pokemons from "./pages/Pokemons";
import RickAndMorty from "./pages/RickAndMorty";
import Favorite from "./pages/Favorite";
import { AnimatePresence } from "framer-motion";

function App() {
  const [favorite, setFavorite] = useState([]);
  return (
    <AnimatePresence>
      <Switch>
        <Route path="/favorite">
          <Favorite favorite={favorite}></Favorite>
        </Route>
        <Route path="/pokemons">
          <Pokemons favorite={favorite} setFavorite={setFavorite}></Pokemons>
        </Route>
        <Route path="/">
          <RickAndMorty></RickAndMorty>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;

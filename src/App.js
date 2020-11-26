import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import GetPokemons from "./pages/Pokemons";
import GetRickAndMorty from "./pages/RickAndMorty";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Switch>
        <Route path="/pokemons">
          <GetPokemons></GetPokemons>
        </Route>
        <Route path="/">
          <GetRickAndMorty></GetRickAndMorty>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Pokemons from './Pokemons';
import PokemonSpec from './PokemonSpec';
import logo from './images/pokedex.png';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <Router>
      <div className="Home">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            <img src={logo} classalt="logo"/>
          </a>
        </div>
        <div>
          <Route path="/" component={Pokemons} exact />
          <Route path="/:id" component={PokemonSpec} exact />
        </div>
      </div>
    </Router >
  );
}

export default Home;

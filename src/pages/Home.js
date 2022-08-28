import React from "react";
import Header from "../components/Header";
import BtnPokemonList from "../components/BtnPokemonList";
import BtnSearchPokemon from "../components/BtnSearchPokemon";
import BtnMyPokemon from "../components/BtnMyPokemon";


function Home() {
  return (
    <div>

      <Header />

      <h1>Welcome to your Pokédex!</h1>

      To see a list of existent pokémon, go to <BtnPokemonList />
      To search for a new pokémon, go to <BtnSearchPokemon />
      To see all the pokémon you have, go to <BtnMyPokemon />

    </div>
  );
}

export default Home;
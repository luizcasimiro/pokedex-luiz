import React from "react";
import CardDetails from "../components/CardDetails";
import Header from "../components/Header";

function MyPokemon() {
  const myPokemon = JSON.parse(localStorage.getItem('myPokemon'));

  if (!myPokemon) {
    return (
      <div>

        <Header />

        <p>
          You don't have any pokémon yet.
        </p>

      </div>
    )
  } else {
    return (
      <div>

        <Header />

        <div>
          {myPokemon.map(poke => <CardDetails
            key={poke.id}
            abilities={poke.abilities}
            attack={poke.attack}
            defense={poke.defense}
            height={poke.height}
            hp={poke.hp}
            id={poke.id}
            name={poke.name}
            speed={poke.speed}
            sprite={poke.sprite}
            types={poke.types}
            weight={poke.weight}
          />)}
        </div>

      </div>
    );
  }
}

export default MyPokemon;
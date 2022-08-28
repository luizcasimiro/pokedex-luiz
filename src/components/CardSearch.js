import React from 'react'
import { useSelector } from 'react-redux';


function CardSearch({ id, name, sprite }) {
  const pokeData = useSelector((state => state.search.pokeData));
  const pokeTypes = pokeData.types.map(type => [type.type.name, type.type.url]);
  const pokeAbilities = pokeData.abilities.map(ability => [ability.ability.name, ability.ability.url]);
  const pokeDetails = {
    id: pokeData.id,
    name: pokeData.name,
    sprite: pokeData.sprites.front_default,
    weight: pokeData.weight,
    height: pokeData.height,
    types: pokeTypes,
    abilities: pokeAbilities,
    speed: pokeData.stats[5].base_stat,
    defense: pokeData.stats[2].base_stat,
    attack: pokeData.stats[1].base_stat,
    hp: pokeData.stats[0].base_stat
  };

  const handleCatch = () => {
    let myPokemon = JSON.parse(localStorage.getItem('myPokemon'));

    if (!myPokemon) {
      myPokemon = [pokeDetails];
    } else {
      const filter = myPokemon.filter(poke => poke.id === pokeDetails.id);
      if (filter.length === 0) {
        myPokemon.push(pokeDetails);
      }
    }

    localStorage.setItem('myPokemon', JSON.stringify(myPokemon));
  }

  return (
    <div>

      <div>
        <img src={sprite} alt='sprite' ></img>
      </div>

      <div>
        {id}
      </div>

      <div>
        {name}
      </div>

      <button
        type='button'
        onClick={() => handleCatch()}
      >
        Catch
      </button>

    </div>

  )
}

export default CardSearch;
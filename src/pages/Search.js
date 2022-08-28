import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { searchPokemon } from '../features/search/searchSlice';
import Header from '../components/Header';
// import CardSearch from '../components/CardSearch';

function Search() {
  const dispatch = useDispatch();
  const pokeData = useSelector((state => state.search.pokeData));
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [value, setValue] = useState('');

  const handleChange = ({ target: { value } }) => {
    setValue(value);
    if (value) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  };

  try {
    if (!pokeData) {
      return (
        <div>

          <Header />

          <input
            type='text'
            placeholder='Pokémon name or id'
            value={value}
            onChange={(event) => handleChange(event)}
          >
          </input>

          <button
            type='button'
            disabled={searchDisabled}
            onClick={() => dispatch(searchPokemon(value))}
          >
            Search
          </button>

          <p>
            Type the name or id <br />
            of the pokémon you want to search.
          </p>

        </div>
      );
    } else {
      return (
        <div>

          <Header />

          <input
            type='text'
            placeholder='Pokémon name or id'
            value={value}
            onChange={(event) => handleChange(event)}
          >
          </input>

          <button
            type='button'
            disabled={searchDisabled}
            onClick={() => dispatch(searchPokemon(value))}
          >
            Search
          </button>

          {/* <CardSearch id={pokeData.id} name={pokeData.name} sprite={pokeData.sprites.front_default} /> */}

        </div>
      );
    }
  } catch (error) {
    return (
      <div>

        <Header />

        <input
          type='text'
          placeholder='Pokémon name or id'
          value={value}
          onChange={(event) => handleChange(event)}
        >
        </input>

        <button
          type='button'
          disabled={searchDisabled}
          onClick={() => dispatch(searchPokemon(value))}
        >
          Search
        </button>

        <div>
          Pokémon Not Found
        </div>

      </div>
    );
  }
}

export default Search;
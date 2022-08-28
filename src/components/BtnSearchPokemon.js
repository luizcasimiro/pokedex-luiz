import React from "react";
import { useNavigate } from "react-router";

function BtnSearchPokemon() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/search')} >Search Pokémon</button>
    </div>
  )
}
export default BtnSearchPokemon;
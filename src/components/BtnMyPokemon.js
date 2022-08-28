import React from "react";
import { useNavigate } from "react-router";

function BtnMyPokemon() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/mypokedex')} >My Pokémon</button>
    </div>
  )
}

export default BtnMyPokemon;
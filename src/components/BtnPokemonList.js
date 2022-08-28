import React from "react";
import { useNavigate } from "react-router";

function ButtonList() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/list')} >Pokémon List</button>
    </div>
  )
}
export default ButtonList;
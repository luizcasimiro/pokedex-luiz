import React from 'react'

function CardDetails({ abilities, attack, defense, height, hp, id, name, speed, sprite, types, weight }) {

  return (
    <div>

      <div>
        <img src={sprite} alt='sprite' ></img>
      </div>

      <div>
        id: {id}
      </div>

      <div>
        Name: {name}
      </div>

      <div>
        Types: {types.map(type =>
          <button
            key={type[0]}
            type='button'
          >
            {type[0]}
          </button>)}
      </div>

      <div>
        Abilities: {abilities.map(ability =>
          <button
            key={ability[0]}
            type='button'
          >
            {ability[0]}
          </button>)}
      </div>

      <div>
        Weight: {weight} kg
      </div>

      <div>
        Height: {height * 10} cm
      </div>

      <div>
        HP: {hp}
      </div>

      <div>
        Attack {attack}
      </div>

      <div>
        Defense: {defense}
      </div>

      <div>
        Speed: {speed}
      </div>

    </div>

  )
}

export default CardDetails;
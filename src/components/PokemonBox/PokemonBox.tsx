import React from 'react';
import { Pokemon } from '../../models/Pokemon';

interface Props extends Pokemon {
  onDelete: () => void;
}

export default function PokemonBox(props:Pokemon & {onDelete: () => void}) {
  return (
    <div>
      <img src={props.img}/>
      <h4>{props.name}</h4>
      <p>Level: {props.level}</p>
      <p>Health: {props.health}</p>
      <p>Damage: {props.damage}</p>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}
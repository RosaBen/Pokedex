import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css'

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default function App() {

  const [pokemonIndex, setPokemonIndex] = useState([0]);
 
  const handleNext = () => {
    setPokemonIndex((index) => (index < pokemonList.length - 1 ? index + 1 : 0));
  }; 
  const handlePrevious = () => {
    setPokemonIndex((index) => (index > 0 ? index - 1 : pokemonList.length - 1));
  };
  
  return (
    <div>
      <button type="button" onClick={handlePrevious}>Précédent</button>
<PokemonCard pokemon={pokemonList[pokemonIndex]}/>
<button type="button" onClick={handleNext}>Suivant</button>
    </div>
  )
}



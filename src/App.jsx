import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css'
import NavBar from './components/NavBar';

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

  const [pokemonIndex, setPokemonIndex] = useState(0);
 
  const handleNext = () => {
    setPokemonIndex((index) => (index < pokemonList.length - 1 ? index + 1 : 0));
  }; 
  const handlePrevious = () => {
    setPokemonIndex((index) => (index > 0 ? index - 1 : pokemonList.length - 1));
  };
  
  return (
    <div>
      
<PokemonCard pokemon={pokemonList[pokemonIndex]}/>
<NavBar nextButton={handleNext} previousButton={handlePrevious}/>
    </div>
  )
}



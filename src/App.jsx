import { useState, useEffect } from 'react';
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
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

export default function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() =>  { alert("hello pokemon trainer :)")}, []);
 
 

  
  return (
    <div>
      
<PokemonCard pokemon={pokemonList[pokemonIndex]}/>
<NavBar pokemons={pokemonList} pokemonIndex={setPokemonIndex}/>
    </div>
  )
}


// useEffect(() =>  { code à executer}, []);
// useEffect(() =>  { code à executer}, [variable]);
// useEffect(() =>  { code à executer}, [variable1, variable2]);

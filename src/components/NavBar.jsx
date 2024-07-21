import PropTypes from 'prop-types';

export default function NavBar({ pokemons, pokemonIndex}) {
    return(
       <>
       {pokemons.map((pokemon, index) => (
              <button 
              key={pokemon.name} 
              type="button"
              onClick={() => pokemonIndex(index)}
              >
                {pokemon.name}</button>
         ))}
       </>
    )
}

NavBar.propTypes = {
    pokemonIndex: PropTypes.func.isRequired,
    pokemons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    })).isRequired,
}
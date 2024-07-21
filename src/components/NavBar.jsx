import PropTypes from 'prop-types';

export default function NavBar({ pokemons, pokemonIndex}) {
    return(
       <>
       {pokemons.map((pokemon, index) => (
              <button 
               
              type="button"
              onClick={() => {
                {pokemon.name === "pikachu" ? alert("pika pikachu !!!") : null}
            pokemonIndex(index)}}
            key={pokemon.name}
              >{pokemon.name}
                </button>
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
import PropTypes from 'prop-types';
export default function PokemonCard({ pokemon }) {
   
 
 return (
    <>
    <figure className={`card ${pokemon.name}`}>
    {pokemon.imgSrc? (<img src={pokemon.imgSrc} alt={pokemon.name} className="card-img"/>): (<p>????</p>)}
        <figcaption>{pokemon.name}</figcaption>
    </figure>

    </>
 )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

// NomFonction.propTypes = {
// props: PropTypes.shape({
// key: PropTypes.type.isRequired,}).isRequired,
// shape for object
// arrayOf for array
// oneOfType for union
// oneOf for enum
// instanceOf for class

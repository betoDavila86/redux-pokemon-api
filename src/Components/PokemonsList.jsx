import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsAction, nextPokemonsAction } from '../redux/pokeDucks'

const PokemonsList = () => {
const dispatch = useDispatch();
const pokemonsArray = useSelector(store => store.pokemons.pokemonsArray);
const offset = 20;

return(
     <section>
        <h4>Pokemon list:</h4>
        <button onClick={() => dispatch(getPokemonsAction())}>Get Pokemons!</button>
        <button onClick={() => dispatch(nextPokemonsAction(offset))}>Next</button>
        <ul>
        {
            pokemonsArray.map(pokemon => {
                return <li key={pokemon.name}>{pokemon.name}</li>
            })
        }
        </ul>
    </section>
 )
}

export default PokemonsList;
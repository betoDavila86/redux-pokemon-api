import axios from 'axios';

// constants
const initialState = {
    pokemonsArray: [],
    offset: 0
}

// types
const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
const NEXT_POKEMONS_SUCCESS = 'NEXT_POKEMONS_SUCCESS'

// reducer
export default function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemonsArray: action.payload
            }
        case NEXT_POKEMONS_SUCCESS:
            return {
                ...state,
                pokemonsArray: action.payload.results,
                offset: action.payload.offset,
            }
        default:
            return state;
    }
}

// actions
export const getPokemonsAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        const { results } = res.data;
        dispatch({
            type: GET_POKEMONS_SUCCESS,
            payload: results
        })
    } catch (error) {
        console.log(error)
    }
}

export const nextPokemonsAction = numberPagination => async (dispatch, getState) => {
    try {
        let { offset } = getState().pokemons;
        offset += numberPagination;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        const { results } = res.data;
        dispatch({
            type: NEXT_POKEMONS_SUCCESS,
            payload: {
                results,
                offset
            }
        })
    } catch (error) {
        console.log(error)
    }
}



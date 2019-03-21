import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const CREATE_POKEMON = "CREATE_POKEMON";


export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const receivePokemon = payload => ({
    type: RECEIVE_POKEMON,
    payload 
})

export const createPokemon = pokemon => ({
    type: CREATE_POKEMON,
    pokemon
})

// thunk action creators
export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestSinglePokemon = (id) => (dispatch) => (
    APIUtil.fetchPokemon(id)
    .then(payload => { 
        return dispatch(receivePokemon(payload))})
)

export const newPokemon = (pokemon) => (dispatch) => (
    APIUtil.newPokemon(pokemon)
        .then(pokemon => {
            return dispatch(receivePokemon(pokemon))
        })
)

// someFunc = () => dispatch(requestAllPokemon() // function(dispatch) { apiutil... }))
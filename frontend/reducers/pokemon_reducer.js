import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, CREATE_POKEMON } from '../actions/pokemon_actions';

export default (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_POKEMON:
            return action.pokemon;
        case RECEIVE_POKEMON:
            return Object.assign({}, state, { [action.payload.pokemon.id]: action.payload.pokemon })
        case CREATE_POKEMON:
            return Object.assign({}, state, { [action.pokemon.id]: action.pokemon })
        default:
            return state;
    }
}
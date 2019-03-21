
export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon);
};


export const selectPokemonItem = (state, item_id) => {
    return state.entities.item[item_id];
};
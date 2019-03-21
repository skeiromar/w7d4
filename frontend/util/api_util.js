export const fetchAllPokemon = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/pokemon',
    })
}

export const fetchPokemon = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/pokemon/${id}`
    })
}
 
export const newPokemon = (pokemon) => {
    return $.ajax({
        method: 'POST',
        url: `/api/pokemon`,
        data: {pokemon: pokemon}
    })
}

// export const createChirp = (chirp) => {
//     return $.ajax({
//         method: 'POST',
//         url: '/api/chirps',
//         data: { chirp: chirp },
//     })
// }
const thunk = store => next => action => {
    if (typeof action === 'function') {
        // debugger
        return action(store.dispatch, store.getState);
    }
    // debugger
    // dispatch(action) // action = undefined
    return next(action);
}

export default thunk;

// someFunc = () => dispatch(requestAllPokemon() // function(dispatch) { apiutil... }))

// function(store) { function(next) {  } }
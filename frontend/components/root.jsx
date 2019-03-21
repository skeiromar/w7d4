import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import PokemonItemContainer from './pokemon/items/pokemon_item_container.jsx';
import PokemonFormContainer from './pokemon/pokemon_form_container.jsx';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
                <Route path='/pokemon/:pokemonId/items/:itemId' component={PokemonItemContainer}/>
                <Route path='/pokemon/create' component={PokemonFormContainer} /> 
                <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer} />
                <Route path="/" component={PokemonIndexContainer} />
        </HashRouter>
    </Provider>
);

export default Root;
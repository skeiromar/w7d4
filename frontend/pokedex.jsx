import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/api_util';
import configureStore from './store/store';
import {requestAllPokemon} from './actions/pokemon_actions';
import {selectAllPokemon } from './reducers/selectors';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
    window.store = configureStore();
    const store = window.store;
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.selectAllPokemon = selectAllPokemon;
    window.requestAllPokemon = requestAllPokemon;


    const rootEl = document.getElementById('root');
    window.APIUtil = APIUtil;
    ReactDOM.render(<Root store = {store}/>, rootEl);
});
import { connect } from 'react-redux';
import { selectPokemon } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, props) => {
    const {pokemonId} = props.match.params;
    
    
    const pokemon = state.entities.pokemon[pokemonId] || {};
    const itemIds = pokemon.item_ids || []
    const items = itemIds.map( (id) => {
        return state.entities.item[id];
    })

    return {
        pokemon: pokemon,
        items: items
    }
};

const mapDispatchToProps = thunkCaller => ({
    requestPokemon: (id) => thunkCaller(requestSinglePokemon(id))

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);
import { connect } from 'react-redux';
import { selectPokemonItem } from '../../../reducers/selectors';
// import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonItem from './pokemon_item';

const mapStateToProps = (state, props) => {
    // const { pokemonId } = props.match.params;


    // const pokemon = state.entities.pokemon[pokemonId] || {};
    // const itemIds = pokemon.item_ids || []
    // const items = itemIds.map((id) => {
    //     return state.entities.item[id];
    // })

    // debugger
    const item = selectPokemonItem(state, props.match.params.itemId) || {}

    return {
        item: item
    }
};

const mapDispatchToProps = thunkCaller => ({
    requestPokemon: (id) => thunkCaller(requestSinglePokemon(id))

});


export default connect(
    mapStateToProps,
    null
)(PokemonItem);
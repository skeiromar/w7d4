import { connect } from 'react-redux';
// import { selectPokemonItem } from '../../../reducers/selectors';
import { newPokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

// const mapStateToProps = (state, props) => {
//     // const { pokemonId } = props.match.params;


//     // const pokemon = state.entities.pokemon[pokemonId] || {};
//     // const itemIds = pokemon.item_ids || []
//     // const items = itemIds.map((id) => {
//     //     return state.entities.item[id];
//     // })

//     // debugger
//     const item = selectPokemonItem(state, props.match.params.itemId) || {}

//     return {
//         item: item
//     }
// };

const mapDispatchToProps = thunkCaller => ({
    createPokemon: (pokemon) => thunkCaller(newPokemon(pokemon))
});


export default connect(
    null, 
    mapDispatchToProps
)(PokemonForm);
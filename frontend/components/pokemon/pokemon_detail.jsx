import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokemonDetail extends Component {
    
    componentDidMount() {
        
        this.props.requestPokemon(this.props.match.params.pokemonId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.requestPokemon(this.props.match.params.pokemonId);
        }

    }

    render() {
        
    return (
      <div>
        {this.props.pokemon.name}
        {this.props.items.map((item, ind) => 
            <li key={ind}><Link to={`/pokemon/${this.props.pokemon.id}/items/${item.id}`}>{item.name}</Link></li>)}
      </div>
    )
  }
}



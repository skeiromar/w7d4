import React, { Component } from 'react'
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        this.props.requestAllPokemon();
    }
  
    render() {
        return (
        <div>
            <ul>

                {this.props.pokemon.map((el, ind) => { return <PokemonIndexItem key={ind} id={el.id} name={el.name} image_url={el.image_url}/> })}
            </ul>
        </div>
        )
    }
}

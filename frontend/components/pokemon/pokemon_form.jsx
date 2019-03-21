import React from 'react';
import { createPokemon } from '../../actions/pokemon_actions';

export default class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            image_url: '',
            poke_type: '',
            attack: 0,
            defense: 0,
            moves: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const pokemon = this.state; 
        this.props.createPokemon(pokemon);
        this.setState({
            name: '',
            image_url: '',
            poke_type: '',
            attack: 0,
            defense: 0,
            moves: [] 
        });
    } 

    render() {

        const { name, image_url, poke_type, attack, defense, moves } = this.state;

        return (
        <form onSubmit={this.handleSubmit} className="pokemon-form">
            <label htmlFor="pokemon-form">Create Pokemon:
          <input
                    id="pokemon-form"
                    type="text"
                    onChange={this.handleChange('name')}
                    value={name}
                />
                    <input type="text" onChange={this.handleChange('image_url')}
                        value={image_url}/>
                    <input type="text" onChange={this.handleChange('poke_type')}
                        value={poke_type}/>
                    <input type="text" onChange={this.handleChange('attack')}
                        value={attack}/>
                    <input type="text" onChange={this.handleChange('defense')}
                        value={defense}/>
                    <input type="text" onChange={this.handleChange('moves')}
                        value={moves}/>
            </label>
            <br />
            <input type="submit" className="create-pokemon" value="Create Pokemon" />
        </form>
        )
    }



}
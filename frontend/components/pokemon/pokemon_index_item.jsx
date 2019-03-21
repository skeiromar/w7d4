import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonIndexContainer from './pokemon_index_container'

export default class PokemonIndexItem extends Component {
  render() {
    return (
        <>  
            <li>{this.props.name}</li>
            <li><img src={this.props.image_url}></img></li>
            <Link to={`/pokemon/${this.props.id}`}>Pokemon Info</Link>
        </>
    )
  }
}

import React, { Component } from 'react'

export default class PokemonItem extends Component {
  


    render() {
        // debugger
    return (
      <div>
            <li>{this.props.item.happiness}</li>
            <li>
            {this.props.item.name}, 
            </li>
            <li>
            {this.props.item.price}
            </li>    
            <li>
                <img src={this.props.item.image_url} alt=""/>
                
            </li>
      </div>
    )
  }
}

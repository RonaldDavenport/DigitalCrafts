import React, { Component } from 'react'
import Card from './Card'

class CardContainer extends Component{
    state = {
        pokecards:this.props.data[0].pokemon[0]
}


    
        
       
    

    render() {
      const dataPoke = this.props.data[0].pokemon
        
    return (
    <div>
       {dataPoke.map((pokemon) => (
          <Card pokemon={pokemon} />
        ))}
   </div>
        );
    }
}
export default CardContainer;

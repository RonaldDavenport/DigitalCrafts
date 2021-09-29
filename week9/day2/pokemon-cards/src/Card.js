import React, { Component } from 'react'

export default class Card extends Component {
    state={
        flipped: false
    }

flipCard=()=>{
this.setState({
    flipped: !this.state.flipped,
})
}

deleteCard=()=>{
this.props.pokemon.splice(0,1)
}

    
    render() {
        const {flipped}= this.state;
      const {id,name,hp,sprites}= this.props.pokemon;
      
        return (
            <div className="card">
                 <img onClick={this.flipCard} src={flipped ? sprites.front : sprites.back} alt="" />
                <h3>{id}</h3>
                <h3>{name}</h3>
                <h3>{hp}</h3>
                
                <button onClick={this.deleteCard}>Delete</button>
               
                

            </div>
        )
    }
}

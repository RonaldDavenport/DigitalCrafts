import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Cart(props) {
    const {shoes} = props


    return (
        <div>
            

        
        <div>
            <div>
                <h1>Your Cart</h1>
            </div>
            
         <h1>{shoes.id}</h1> 
        <h1>{shoes.name}</h1>
        <img src={shoes.image} alt="" />
        <button>Remove From Cart</button>
         </div>
        
        </div>
        
        

    )
}

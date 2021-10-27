import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart(props) {
    const addedShoes = useSelector((state)=>state.ShoeData.cartInfo)
    console.log(addedShoes)
console.log(props)
    return (
        <div>
          
            <h1>Cart</h1>
            {addedShoes.id}
        </div>
    )
}

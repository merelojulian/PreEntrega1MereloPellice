import React from 'react'
import "./itemListContainer.css"


const ItemListContainer = (props) => {
    return (
        <div className='item'>
            <h2>{props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer
import React from 'react'
import ShopCard from './ShopCard';

function CardsView(props) {
    return (
        <div className='cards'>
            {props.cards.map((el, index) => <ShopCard product={el} key={index}/>)}
        </div>
    )
}
export default CardsView;

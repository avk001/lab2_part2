import React from 'react'


function ShopCard(props) {
    return (
        <div className='card card-product' style={{color:'#000000', position: 'relative', background: `url(${props.product.img}) no-repeat center`, backgroundRepeat: 'space', backgroundSize: '300px' , width: '300px', height: '350px'}}>
            {/*<div className='card'>*/}
                <h4 className={{marginTop: '100px'}}>
                    {props.product.name}
                </h4>
                <span>
                    {props.product.color}
                </span>
            {/*</div>*/}
            {/*<img className='card card-image' src={props.product.img} alt={props.product.name}/>*/}
            <div className='card' style={{position: 'absolute', bottom: 0, verticalAlign:'middle'}}>
                <span style={{marginLeft: '10px'}}>
                    ${props.product.price}
                </span>
                <button  className='card-add'> Add to card</button>
            </div>
        </div>
    )
}


export default ShopCard
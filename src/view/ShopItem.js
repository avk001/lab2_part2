function ShopItem(props) {
    return (
        <div className='item-product' style={{color:'#000000'}}>
            <img className='item item-image' src={props.product.img} alt={props.product.name}/>
            <h4 className='item'>
                {props.product.name}
            </h4>
            <span className='item item100'>
                {props.product.color}
            </span>
            <span className='item item100'>
                {props.product.price}
            </span>
            <span className='item'>
                <button  className='item-add'>Add to card</button>
            </span>
        </div>
    )
}
export default ShopItem
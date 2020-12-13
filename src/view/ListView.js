import ShopItem from './ShopItem'

function ListView(props) {
    return (
        <div className='item' style={{width:'1020px'}}>
            {props.items.map((el, index) => <ShopItem product={el} key={index}/>)}
        </div>
    )
}
ListView.propTypes = {
}

export default ListView;

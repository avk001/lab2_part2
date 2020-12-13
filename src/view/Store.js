import React, { PureComponent } from 'react'

import CardsView from './CardView'
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import Cardjson from './card.json'

export class Store extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'list',
            products: Cardjson
        };
    }
    handleSwitch = evt => {
        this.setState(() => {return evt === 'list'?  {icon: 'th'}: {icon: 'list'} })
    };

    render() {
        return (
            <div className='wrap'>
                <IconSwitch name={this.state.icon} onSwitch={this.handleSwitch}/>
                {this.state.icon === 'list' ? <CardsView cards={this.state.products} /> : <ListView items={this.state.products}/>}
            </div>
        )
    }
}
export default Store;
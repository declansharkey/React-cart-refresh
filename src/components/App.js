import React from 'react';
import Title from './Title';
import DeliveryMethods from './DeliveryMethod';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import OrderTotal from './OrderTotal';
import sampleProducts from '../sample-products';

class App extends React.Component {

    //this is a constructor used to set up state
    constructor() {
        super();
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            products: sampleProducts
        };

    }

    //remove an item from state
    removeItem(key) {
        const products = { ...this.state.products };
        delete products[key];
        this.setState({ products });
    }


    //render out the components I made
    render() {
        return (
            <div className="cart-main">
                <Title page="Delivery &amp; Payment Methods" />
                <DeliveryMethods />
                <PaymentMethods />
                <OrderTotal  currentState={this.state.products}/>
                <OrderSummary products={this.state.products} removeItem={this.removeItem}/>
            </div>
        )
    }
}

export default App;
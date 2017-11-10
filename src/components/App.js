import React from 'react';
import Title from './Title';
import DeliveryMethods from './DeliveryMethod';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import OrderTotal from './OrderTotal';
import sampleProducts from '../sample-products';

class App extends React.Component {

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
        console.log("pressed");
    }

    render() {
        return (
            <div className="cart-main">
                <Title page="Delivery &amp; Payment Methods" />
                <DeliveryMethods />
                <PaymentMethods />
                <OrderTotal  />
                <OrderSummary products={this.state.products} removeItem={this.removeItem}/>
            </div>
        )
    }
}

export default App;
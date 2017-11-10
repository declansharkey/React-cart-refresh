import React from 'react';
import Products from '../components/Products'
import sampleProducts from '../sample-products';


class OrderSummary extends React.Component {

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
            <section className="order-summary">
                <div className="order-summary-title">
                    <h3>Order Summary</h3>
                    <span className="change-order">Change</span>
                </div>
                <div className="my-orders-wrapper">
                    {
                        Object
                            .keys(this.state.products)
                            .map(key => <Products removeItem={this.removeItem} key={key} id={key} details={this.state.products[key]} />)
                    }
                </div>
            </section>
        )
    }
}

export default OrderSummary;
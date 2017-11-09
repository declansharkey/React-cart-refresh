import React from 'react';
import Products from '../components/Products'
import sampleProducts from '../sample-products';


class OrderSummary extends React.Component {

    constructor() {
        super();

        //what I'm doing here is loading my products list, into the state
        this.state={
            products:sampleProducts
        };
        
    }
    render() {
        return (
            <section className="order-summary">
            <div class="order-summary-title">
                <h3>Order Summary</h3>
            <span class="change-order">Change</span>
          </div>
                <div className="my-orders-wrapper">
                {
                    Object
                        .keys(this.state.products)
                        .map(key => <Products key={key} details={this.state.products[key]}/> )
                }
                </div>
            </section>
        )
    }
}

export default OrderSummary;
import React from 'react';
import OrderTotalSum from './OrderTotalSum';

class OrderTotal extends React.Component {

    getTotal(){
        const count = Object.keys(this.props.currentState).values;
        return count;
    }

    render() {
        return (
            <section className="order-total-wrapper">
                <div className="order-container">
                    <h3>Order Total</h3>
                    <OrderTotalSum getTotal={this.getTotal}/>
                </div>
                <div className="continue-btn">
                    <button className="btn btn-primary">Continue to order review</button>
                </div>
            </section>
        )
    }
}

export default OrderTotal;
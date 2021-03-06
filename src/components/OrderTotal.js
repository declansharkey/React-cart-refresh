import React from 'react';
import OrderTotalSum from './OrderTotalSum';

class OrderTotal extends React.Component {

    getTotal(){
        var obj = this.props.currentState
        var total = 0;
        var keys = Object.keys(obj);

        keys.forEach((key) => {
           // console.log(obj[key]);
            
            total += obj[key].price;
          })

          return total;
    }

    render() {
        return (
            <section className="order-total-wrapper">
                <div className="order-container">
                    <h3>Order Total</h3>
                    <OrderTotalSum getTotal={this.getTotal()}/>
                </div>
                <div className="continue-btn">
                    <button className="btn btn-primary">Continue to order review</button>
                </div>
            </section>
        )
    }
}

export default OrderTotal;
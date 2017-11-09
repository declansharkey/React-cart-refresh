import React from 'react';
import Title from './Title';
import DeliveryMethods from './DeliveryMethod';
import PaymentMethods from './PaymentMethod';
import OrderSummary from './OrderSummary';
import OrderTotal from './OrderTotal';

class App extends React.Component {

    render() {
        return (
            <div className="cart-main">
                <Title page="Delivery &amp; Payment Methods" />
                <DeliveryMethods />
                <PaymentMethods />
                <OrderTotal  />
                <OrderSummary loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;
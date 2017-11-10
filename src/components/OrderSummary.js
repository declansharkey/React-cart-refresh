import React from 'react';
import Products from '../components/Products'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class OrderSummary extends React.Component {

    render() {
        return (
            <section className="order-summary">
                <div className="order-summary-title">
                    <h3>Order Summary</h3>
                    <span className="change-order">Change</span>
                </div>
                <CSSTransitionGroup className="my-orders-wrapper" component="div" transitionName="delete" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {
                        Object
                            .keys(this.props.products)
                            .map(key => <Products removeItem={this.props.removeItem} key={key} id={key} details={this.props.products[key]} />)
                    }
                </CSSTransitionGroup>
            </section>
        )
    }
}

export default OrderSummary;
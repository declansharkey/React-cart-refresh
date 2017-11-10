import React from 'react';
import {formatPrice} from '../helpers';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
class Products extends React.Component {

    render() {
        const {details, id} = this.props;
        return (
            <CSSTransitionGroup className="my-order-grid" component="div" transitionName="delete" transitionEnterTimeout={5000} transitionLeaveTimeout={5000}>
                <img src={details.image} alt={details.name}/>
                <h4>{details.name}</h4>
                <span className="item-price">{formatPrice(details.price)}</span>
                <span className="item-quantity">Quantity: {details.quantity}</span>
                <span onClick={() => this.props.removeItem(id)} className="remove-item">Remove</span>
            </CSSTransitionGroup>
        )
    }
}

export default Products;
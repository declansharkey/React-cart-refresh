import React from 'react';
import {formatPrice} from '../helpers';

class Products extends React.Component {

    render() {
        const {details, id} = this.props;
        return (
            <div className="my-order-grid">
                <img src={details.image} alt={details.name}/>
                <h4>{details.name}</h4>
                <span className="item-price">{formatPrice(details.price)}</span>
                <span className="item-quantity">Quantity: {details.quantity}</span>
                <span onClick={() => this.props.removeItem(id)} className="remove-item">Remove</span>
            </div>
        )
    }
}

export default Products;
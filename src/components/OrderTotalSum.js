import React from 'react';
import {formatPrice} from '../helpers';

class OrderTotalSum extends React.Component {
    render() {
        return (
            <div className="order-total">
                <p className="promo-code">+ Add promo code
                    <span className="brackets"> (Online Payment Only)</span>
                </p>
                <div className="subtotal-wrapper">       
                    <p className="subtotal-name">Subtotal</p>
                    <p className="subtotal-value">{formatPrice(this.props.getTotal)}</p>
                </div>
                <div className="total-section">
                    <p className="grand-total">Total</p>
                    <p className="grand-total-value">{formatPrice(this.props.getTotal)}</p>
                </div>
            </div>

        )
    }
}

export default OrderTotalSum;
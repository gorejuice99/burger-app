import React, { Component } from 'react';

import Aux from '../../../hoc/Auxx/Aux';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component {
    render () {
        let ingredientSummary = Object.keys(this.props.ingredients).map(key => {
            return (
                <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span>: {this.props.ingredients[key]}
                </li>
            );
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2, 0)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                
            </Aux>
        );
    }
};

export default OrderSummary;
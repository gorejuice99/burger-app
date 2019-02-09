import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 0
        }
    }


    render () {
        return (
            <React.Fragment>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </React.Fragment>
        )
    }
}

export default Checkout;
import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../services/BurgerService';

import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('orders.json').then(response => {
            const fetchOrders = [];
            for(let key in response.data) {
                fetchOrders.push({
                    id: key,
                    ...response.data[key]
                })
            }
            
            this.setState({orders: fetchOrders, loading: false})
        }).catch(error => {
            this.setState({loading: false})
        });
    }  

    render() {
        return (
            <React.Fragment>
            {   this.state.orders.map(order => (
                    <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                ))
            }
            </React.Fragment>
        );
    }
}

export default WithErrorHandler(Orders, axios);
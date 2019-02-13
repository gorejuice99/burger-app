import React, { Component } from 'react';

import axios from '../../../services/BurgerService';

import Button from '../../../components/UI/Button/Button';
import classes from './Contact.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Josh Fabillar',
                address: {
                    street: 'Pionner',
                    zipCode: '1550',
                    country: 'Philippines'
                },
                email: 'joshua.g.fabillar@accenture.com'
            },
            deliveryMethod: 'vip'
        };



        axios.post('/orders.json', order).then(response => {
            // console.log(response);
            this.setState({
                loading: false,
            });
            
            this.props.history.push('/');
        }).catch(error => {
            // console.log(error);
            this.setState({
                loading: false,
            });
        });

        // console.log(this.props.ingredients);    
    }

    render () {
        let form = (
            <form>
                <input type="text" name="name" placeholder="your name" />
                <input type="text" name="email" placeholder="your email" />
                <input type="text" name="street" placeholder="your street" />
                <input type="text" name="postalCode" placeholder="your postal code" />

                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                { form }
            </div>
        );
    }
}

export default ContactData;
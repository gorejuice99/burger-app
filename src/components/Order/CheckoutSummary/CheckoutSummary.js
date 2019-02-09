import React from  'react';
import Burger from '../../Burger/Burger';
import classes from './CheckoutSummary.module.css';
import Button from '../../UI/Button/Button';
const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>I hope you like the taste!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Button btnType="danger" clicked>CANCEL</Button>
            <Button btnType="success" clicked>SUCCESS</Button>
        </div>
    );    
}

export default checkoutSummary;


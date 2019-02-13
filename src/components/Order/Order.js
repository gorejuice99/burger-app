import React from 'react';

import classes from './Order.module.css';

const order = (props) => {
    let ingredients = [];   
    for(let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    } 

    let ingredientOutput = ingredients.map(ig => (
        <span style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.amount})</span>
        )
    );

    return(
        <div className={classes.Order}>
            <p>Ingredient: {ingredientOutput}</p>
            <p>Price: USD <b>{ props.price.toFixed(2) }</b></p>
        </div>
    );
    
};

export default order;
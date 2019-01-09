import React from 'react';

import Aux from '../../../hoc/AuxWrap';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>
                <span 
                    style={{textTransform: 'capitalize'}}>
                    {key}
                </span>
                : {props.ingredients[key]}
            </li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default orderSummary;
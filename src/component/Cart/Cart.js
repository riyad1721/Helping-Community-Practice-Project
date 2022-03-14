import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { carts } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of carts) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;


    const person = <FontAwesomeIcon icon={faPerson} />


    return (
        <div>
            <h1>{person} Person Added : {totalQuantity}</h1>
        </div>
    );
};

export default Cart;
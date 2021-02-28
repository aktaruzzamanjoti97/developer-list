import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    let totalSalaries = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalSalaries += element.location.street.number;
    }

    return (
        <div className='Cart-show'>
            <h1>Developers Summary</h1>
            <h2>Added members: {cart.length} </h2>
            <h2>Total Salaries You Have to Pay Them: <br/> <span className='total'>${totalSalaries}/per month</span> </h2>
            
        </div>
    );
};

export default Cart;
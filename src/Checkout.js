import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1 className='checkout__line'>Shopping Cart</h1>
                {basket?.length === 0 ? (
                    <div className="checkout__empty">
                        <h2>Your Amazon Cart is empty.</h2>
                        <p>Check your Saved for later items below or <a href="/">continue shopping.</a></p>
                    </div>
                ) : (
                        <div className="checkout__shopping">
                            <h2>Your Amazon Cart</h2>
                            {basket?.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}   
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Checkout;

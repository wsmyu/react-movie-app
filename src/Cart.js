import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const clearCart = () => {
        props.setCartItems([]);
    };

    const calculateTotal = () => {
        let total = 0;
        props.cartItems.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    };

    const calculateTotalWithTax = () => {
        const tax = 1.13;
        const total = calculateTotal();
        const totalWithTax = total * tax;
        return totalWithTax.toFixed(2);
    };

    const placeOrder = () => {
        setIsOrderPlaced(true);
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {props.cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items-container">
                    {props.cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <Link to={`/moviedescription/${item.imdbID}`}>
                                <img src={item.poster} alt={item.title} />
                            </Link>
                            <div className="cart-item-details">
                                <h2>{item.title}</h2>
                                <p>Price: ${item.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <div className="cart-totals-container">
                        <div className="cart-total">
                            <p>Total:</p>
                            <p>${calculateTotal()}</p>
                        </div>
                        <div className="cart-total">
                            <p>Total with Tax (HST):</p>
                            <p>${calculateTotalWithTax()}</p>
                        </div>
                    </div>
                    {isOrderPlaced ? (
                        <p>Your order has been placed. Please check your email.</p>
                    ) : (
                        <div className="cart-buttons-container">
                            <button className="btn btn-success" onClick={placeOrder}>
                                Place Order
                            </button>
                            <button className="btn btn-danger" onClick={clearCart}>
                                Clear Cart
                            </button>

                        </div>
                    )}
                </div>
            )}
            <Link to="/" className="cart-continue-shopping">
                Continue Shopping
            </Link>
        </div>
    );
}

export default Cart;

import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  const { cartItems } = props;

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
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

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items-container">
          {cartItems.map((item) => (
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
        </div>
      )}
      <Link to="/" className="cart-continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
}

export default Cart;

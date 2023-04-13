import React from 'react';

function PriceComparison(props) {
  const { cartItems } = props;

  // Hardcoded data for Netflix and HBO Max prices and availability
  const platforms = [
    { name: 'Netflix', price: 18.99, available: [true, false, true, false] },
    { name: 'HBO Max', price: 14.99, available: [false, true, false, true] },
  ];

  const calculateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const calculatePlatformTotal = (platform) => {
    let total = 0;
    cartItems.forEach((item, index) => {
      if (platform.available[index]) {
        total += platform.price;
      }
    });
    return total.toFixed(2);
  };

  return (
    <div className="price-comparison">
      <h2>Price Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Price</th>
            <th>Netflix</th>
            <th>HBO Max</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item.id}>
              <td>
                <img src={item.poster} alt={item.title} />
                {item.title}
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{platforms[0].available[index] ? <span>&#10003;</span> : <span>&#10005;</span>}</td>
              <td>{platforms[1].available[index] ? <span>&#10003;</span> : <span>&#10005;</span>}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>${calculateCartTotal()}</td>
            <td>${calculatePlatformTotal(platforms[0])}</td>
            <td>${calculatePlatformTotal(platforms[1])}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PriceComparison;

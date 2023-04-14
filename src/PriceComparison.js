import React from 'react';
import netflixLogo from './images/Netflix.png';
import disneypluslogo from './images/Disney.png';
import buyonAmazon from './images/amazon.png';


function PriceComparison(props) {
    const { cartItems } = props;

    // Hardcoded data for Netflix and HBO Max prices and availability
    const platforms = [
        { name: 'Netflix', price: 19.99, available: [true, false, true, false] },
        { name: 'Disney', price: 11.99, available: [false, true, false, true] },
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
                total = platform.price;
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
                        <th></th>
                        <th>Movie</th>
                        <th><img className="amazonlogo" src={buyonAmazon} />  </th>
                        <th><img className="logo" src={netflixLogo} /> </th>
                        <th><img className="logo" src={disneypluslogo} /> </th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={item.id}>
                            <td><img src={item.poster} alt={item.title} /></td>
                            <td>{item.title}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{platforms[0].available[index] ? <span>&#10003;</span> : <span>&#10005;</span>}</td>
                            <td>{platforms[1].available[index] ? <span>&#10003;</span> : <span>&#10005;</span>}</td>
                        </tr>
                    ))}
                    <tr className="totals-row">
                        <td></td>
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

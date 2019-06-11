import React from 'react';

class ShoppingCart extends React.Component {
    render() {
        const rentalList = this.props.rentals
            .map((rental, idx) => {
                return (
                    <li key={idx}>
                        <span>{rental}</span>
                        <button onClick={() => this.props.onDeleteRental(idx)}>Delete</button>
                    </li>
                );
            });

        return (
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {rentalList}
                </ul>
            </div>
        );
    }
}

export default ShoppingCart;

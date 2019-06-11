import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  static propTypes = {
    rentals: PropTypes.array.isRequired,
    onDeleteRental: PropTypes.func.isRequired,
  }

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

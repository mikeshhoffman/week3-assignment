import React from 'react';
import Rental from './Rental.generic';
import PropTypes from 'prop-types';

export default class RentalList extends React.Component {
  static propTypes = {
    rentals: PropTypes.array.isRequired,
    onBookRental: PropTypes.func.isRequired,
  }

  render() {
    const ulStyle = {
      spaceAbove: "10px",
      marginTop: "10px",
      listStyleType: "none"
    };

    const rentalList = this.props.rentals
    .map((rental, idx) => {
      return (
        <Rental
          rental={rental}
          onClick={this.props.onBookRental}
          idx={idx}
          key={idx}
          buttonText="Book"
        />
      );
    });

    return (
      <div>
        <h2>Available Rentals</h2>
        <ul style={ulStyle}>
          {rentalList}
        </ul>
    </div>
  );
  }
}

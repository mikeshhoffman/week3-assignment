import React from 'react';
import Rental from './Rental.generic';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  static propTypes = {
    rentals: PropTypes.array.isRequired,
    onDeleteRental: PropTypes.func.isRequired,
  }

  render() {
    const ulStyle = {
      spaceAbove: "20px",
      marginTop: "20px",
      listStyleType: "none"
    };

    const liStyle = {
      margin: "20px 0",
      padding: "20px"
    }

    // Approach 1: not using Rental.generic: 
    // const rentalList = this.props.rentals
    // .map((rental, idx) => {
    //   return (
    //     <li key={idx} style={liStyle}>
    //       <div>{rental.title}.  Type: {rental.houseType}. </div>
    //       <img src={rental.image} alt={rental.title}/>
    //       <div> Location: {rental.location.city}, {rental.location.country}. </div>
    //       <div> ${rental.payment.cost}. </div>
    //       <div> {rental.payment.description} </div>
    //       <div> Host: {rental.host.name}. </div>
    //       <div> Superhost? {rental.host.isSuperhost} </div>
    //       <div> Stars: {rental.rating.stars}, </div>
    //       <div> reviews: {rental.rating.reviews} </div>
    //       <button onClick={() => this.props.onDeleteRental(idx)}>Delete</button>
    //     </li>
    //   );
    // });

    // Approach 2: using Rental.generic: 
    const rentalList = this.props.rentals
    .map((rental, idx) => {
      return (
        <Rental
          rental={rental}
          onClick={this.props.onDeleteRental}
          idx={idx}
          key={idx}
          buttonText="Delete"
        />
      );
    });


    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul style={ulStyle}>
          {rentalList}
        </ul>
      </div>
    );
  }
}

export default ShoppingCart;

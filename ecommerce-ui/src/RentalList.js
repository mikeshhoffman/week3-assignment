import React from 'react';
import Rental from './Rental.generic';

export default class RentalList extends React.Component {
    render() {
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
                <ul>
                    {rentalList}
                </ul>
            </div>
        );
    }
}

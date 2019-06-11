import React from 'react';
import rentals from './airbnbs.json';
import './App.css';
import ShoppingCart from './ShoppingCart';
import RentalList from './RentalList';

class App extends React.Component {
  state = {
    rentals: [],
    selectedRentals: []
  }

  componentDidMount() {
    const rentalsAry = rentals
      .map((rental, idx) => {
        return (
            rentals[idx].title
        )
        // return (
        //   {
        //     title: rentals[idx].title,
        //     houseType: rentals[idx].houseType
        //   }
        // )
    });
    console.log(rentalsAry);

    this.setState(prevState => {
      return {
        rentals: rentalsAry
      }
    });
  }

  bookRental = (idx) => {
    const selectedRental = this.state.rentals[idx];
    if (this.state.selectedRentals.includes(selectedRental)) {
      alert('You already selected that rental.');
      return;
    }
    
    this.setState(prevState => {
      return {
        selectedRentals: [...prevState.selectedRentals, selectedRental]
      };
    });
  }

  deleteRental = (idx) => {    
    this.setState(prevState => {
      const selectedRentals = [...prevState.selectedRentals];
      selectedRentals.splice(idx, 1);

      return {
        selectedRentals
      };
    });
  }

  render() {
    return (
      <div className="App">
        <ShoppingCart
          rentals={this.state.selectedRentals}
          onDeleteRental={this.deleteRental}
        />
        <hr />
        <RentalList
          rentals={this.state.rentals}
          onBookRental={this.bookRental}
        />
      </div>
    );
  }
}

export default App;

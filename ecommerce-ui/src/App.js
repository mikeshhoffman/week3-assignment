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
          {
            "title": rentals[idx].title,
            "houseType": rentals[idx].houseType,
            "image": rentals[idx].image,
            "location": {
                "city": rentals[idx].location.city,
                "country": rentals[idx].location.country
            },
            "payment": {
                "cost": rentals[idx].payment.cost,
                "description": rentals[idx].payment.description
            },
            "host": {
                "name": rentals[idx].host.name,
                "isSuperhost": rentals[idx].host.isSuperhost
            },
            "rating": {
                "stars": rentals[idx].rating.stars,
                "reviews": rentals[idx].rating.reviews
            }
          }
        )
    });
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

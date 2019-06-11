import React from 'react';

export default class Rental extends React.Component {
  render() {
    const liStyle = {
      margin: "20px 0",
      padding: "20px"
    }
    const {rental, onClick, idx, buttonText} = this.props;

    return (
      <li style={liStyle}>
        <div>{rental.title}.  Type: {rental.houseType}. </div>
        <img src={rental.image} alt={rental.title}/>
        <div> Location: {rental.location.city}, {rental.location.country}. </div>
        <div> ${rental.payment.cost}. </div>
        <div> {rental.payment.description} </div>
        <div> Host: {rental.host.name}. </div>
        <div> Superhost? {rental.host.isSuperhost.toString()} </div>
        <div> Stars: {rental.rating.stars}, </div>
        <div> reviews: {rental.rating.reviews} </div>
        <button onClick={() => onClick(idx)}>{buttonText}</button>
      </li>
    )
  }
}

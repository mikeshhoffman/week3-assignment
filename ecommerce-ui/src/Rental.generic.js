import React from 'react';

export default class Rental extends React.Component {
    render() {
        const {rental, onClick, idx, buttonText} = this.props;

        return (
            <li>
                <span>{rental}</span>
                <button onClick={() => onClick(idx)}>{buttonText}</button>
            </li>
        )
    }
}

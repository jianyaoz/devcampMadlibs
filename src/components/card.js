import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'Blue',
            pluralNoun: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange() {
        console.log('this is the value')
        this.setState({ color: event.target.value })  
}


    render() {

        return(
            <div className='card'>
                <h1>{this.state.color}</h1>
                <input value={this.state.color} onChange={(event) => this.handleInputChange(event)}/>
            </div>
        )
    // I believe this is no longer used
        return (
            <div className="card">
                { Input('Color') }
                { Input('Plural Noun') }
            </div>
         )
    //end no longer used
    }
}

export default Card;
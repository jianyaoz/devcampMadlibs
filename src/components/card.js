import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'Blue',
            pluralNoun: '',
        }
    }
    // this code was in the website but I don't remember it from the video
    handleInputChange() {
        this.setState({ color: 'red' })  
}
//end mystery code

    render() {

        return(
            <div className='card'>
                <h1>{this.state.color}</h1>
                <input/>
            </div>
        )
    // I believe this is no longer used
        // return (
        //     <div className="card">
        //         { Input('Color') }
        //         {Input('Plural Noun')}
        //     </div>
        //  )
    //end no longer used
    }
}

export default Card;
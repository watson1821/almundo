import React, { Component } from 'react';
import Hotel from '../components/hotel';

class HotelsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotels: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8889/api/hotels/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        hotels: result
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        return this.state.hotels.length ? (
            <div>
                <Hotel hotels = { this.state.hotels }/>
            </div>
        ) : null;
    }
}

export default HotelsContainer;
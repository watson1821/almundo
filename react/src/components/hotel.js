import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hotel extends Component {
	constructor(props) {
		super(props);

		this.getStarsEl = this.getStarsEl.bind(this);
		this.getAmenities = this.getAmenities.bind(this);
	}

	getStarsEl(stars) {
		const ret = [];
		for (let index = 0; index < stars; index++) {
			ret.push(<span key={index} className="filters__by-name-star fa fa-star"></span>);
		}
		return ret;
	}

	getAmenities(amenities) {
		return amenities.length ? amenities.map((amenitie) => {
			return (
				<span key={amenitie}>
					<img src={"/resources/assets/icons/amenities/" + amenitie + ".svg"} />
				</span>)
		}) : null;
	}

	render() {
		return this.props.hotels.length ? this.props.hotels.map((hotel) => {
			return (
				<div className="hotels__row row">
					<div className="col">
						<img src={"/resources/assets/images/hotels/" + hotel.image} />
					</div>
					<div className="col">
						<div className="hotels__row-name">{hotel.name}</div>
						<div className="hotels__row-stars">{this.getStarsEl(hotel.stars)}</div>
						<div className="hotels__row-amenities">{this.getAmenities(hotel.amenities)}</div>
					</div>
					<div className="col hotels__row-price-container">
						<p className="hotels__row-price-label">Precio por noche por habitacion</p>
						<div className="hotels__row-price">
							<span>ARS </span><span className="hotels__row-price-number">{hotel.price}</span>
						</div>
						<button className="hotels__row-price-action">Ver hotel</button>
					</div>
				</div>);
		}) : null;
	}
}

Hotel.propTypes = {
	hotels: PropTypes.array
}

export default Hotel

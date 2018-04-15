import React from 'react';

const FilterComponent = () => {

	const getStarsEl = (stars) => {
		const ret = [];
		for (let index = 0; index < stars; index++) {
			ret.push(<span key={index} className="filters__by-star-star fa fa-star"></span>);
		}
		return ret;
	};

	return (
		<div className="filters">
			<div className="filters__title">Filtros</div>
			<div className="filters__by-name">
				<div className="filters__by-name-search">
					<span className="filters__by-name-search-img fa fa-search"></span>
					<span className="filters__by-name-label">Nombre del hotel</span>
					<span className="filters__by-name-arrow fa fa-caret-down"></span>
				</div>
				<div className="filters__by-name-actions">
					<input className="filters__by-name-input" placeholder="ingrese el nombre del hotel" />
					<button className="filters__by-name-button">Aceptar</button>
				</div>
			</div>
			<div className="filters__by-star">
				<div className="filters__by-star-search">
					<span className="filters__by-star-search-img fa fa-star"></span>
					<span className="filters__by-star-label">Estrellas</span>
					<span className="filters__by-star-arrow fa fa-caret-down"></span>
				</div>
				<div className="filters__by-name-actions">
					<div>
						<input type="checkbox"/>
						<span>Todas las estrellas</span>
					</div>
					<div>
						<input type="checkbox"/>
						{ getStarsEl(5) }
					</div>
					<div>
						<input type="checkbox"/>
						{ getStarsEl(4) }
					</div>
					<div>
						<input type="checkbox"/>
						{ getStarsEl(3) }
					</div>
					<div>
						<input type="checkbox"/>
						{ getStarsEl(2) }
					</div>
					<div>
						<input type="checkbox"/>
						{ getStarsEl(1) }
					</div>
				</div>
			</div>
		</div>
	)
};

export default FilterComponent;
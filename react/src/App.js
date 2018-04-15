import React, { Component } from 'react';
import HotelsContainer from './containers/hotelsContainer'
import FilterComponent from './components/filterComponent'

class App extends Component {
	render() {
		return (
			<div>
				<header className="header container-fluid">
					<img src="/resources/assets/images/logo-almundo.svg" />
				</header>
				<div className="page-container row">
					<div className="col-4 filterComponent"><FilterComponent /></div>
					<div className="col-8 hotelsContainer"><HotelsContainer /></div>
				</div>
			</div>
			
		);
	}
}

export default App;

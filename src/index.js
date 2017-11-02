import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/header.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Location from './components/Location'
import Policies from './components/Policies'


import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
	<Router>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/location&contact' component={Location} />
				<Route exact path='/policies' component={Policies} />
			</Switch>
			<Footer />
		</div>
	</Router>

), document.getElementById('root'));
registerServiceWorker();

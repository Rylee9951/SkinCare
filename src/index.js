import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/home.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'



import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
	<Router>
		<div className="wrapper">
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
			<Footer />
		</div>
	</Router>

), document.getElementById('root'));
registerServiceWorker();

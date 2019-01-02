import { h, Component } from 'preact';
import { Router } from 'preact-router-nested';
import AsyncRoute from 'preact-async-route';

import Header from 'common/header';
import Home from 'common/home';
import Profile from 'common/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router path="/" onChange={this.handleRoute}>
					<Router path="/auth/:component*">
						<AsyncRoute path="/login" getComponent={ () => import('./pages/login').then(module => module.default) }/>
					</Router>
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Home path="/" default />
				</Router>
			</div>
		);
	}
}

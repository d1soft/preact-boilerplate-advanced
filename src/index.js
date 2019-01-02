// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import store from './store';
import { Provider } from 'mobx-preact';
import './style';

let root = null;
function init () {
  let App = require('./app').default;
  root = render((
    <Provider {...store}>
      <App />
    </Provider>
  ), document.body, root);
}

if (process.env.NODE_ENV==='production') {
	require('./pwa');
}

if (module.hot) {
	module.hot.accept('./app', () => requestAnimationFrame(init) );
}

init();

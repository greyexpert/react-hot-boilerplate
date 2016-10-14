import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';

// import 'react-toolbox/lib/commons.scss';

import App from './App';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

const rootEl = document.getElementById('root');

const renderApp = App => render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
, rootEl);

renderApp(App);

if (module.hot) {
  // Enable Webpack hot module replacement

  // For reducers
  module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers/index').default));
  // For React components
  module.hot.accept('./App', () => renderApp(require('./App').default));
}

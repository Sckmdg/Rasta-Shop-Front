import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable'
import { Provider } from 'react-redux'
import DevTools from './redux/utils/DevTools'
import configureStore from './redux/configureStore'
import { rootReducers } from './redux/rootReducer'

// Router
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureRoutes from './routes'
import 'babel-polyfill'

// Browser History Setup
const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const state = fromJS(window.__INITIAL_STATE__);

const hasReduxExtension = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function';
const store = configureStore(state, rootReducers, hasReduxExtension);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: createSelectLocationState()
});

const routes = configureRoutes(store, history);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
      {__DEBUG__ && !hasReduxExtension && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root')
);

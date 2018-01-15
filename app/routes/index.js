import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
// import { rootActions as actions } from '../redux/rootReducer'

import AppLayout from '../views/AppLayout'

export default function (store, history) {
  const onEnter = (prevState, nextState) => {
    scrollTo(document.window, 0);
    // store.dispatch(actions.checkToken());
  };

  return (
    <Route path='/' onEnter={onEnter}>
      <IndexRoute />

      <Route component={AppLayout} />

      <Redirect from='*' to='/' />
    </Route>
  )
}

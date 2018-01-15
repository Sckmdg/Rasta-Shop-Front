function createThunkMiddleware () {
  return ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, getState().getIn(['auth', 'token']))
    }

    return next(action)
  }
}

const thunk = createThunkMiddleware()

export default thunk

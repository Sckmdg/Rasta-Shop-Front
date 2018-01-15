import { combineReducers } from 'redux-immutable'
/* Reducers */
import routing from './modules/routing/routing'
import layout, {actions as layoutActions} from './modules/common/layout'

export const rootReducers = combineReducers({
  routing,
  layout
});

export const rootActions = Object.assign(
  {},
  layoutActions
);

import { handleActions, createAction } from 'redux-actions'
import { fromJS } from 'immutable'

export const TEST_CONST = 'TEST_CONST';

/*
 * Actions
 */
export const testAction = createAction(TEST_CONST);

export const actions = {
  testAction
};

export const initialState = fromJS({
  test: 'test'
});

export default handleActions({
  [TEST_CONST]: (state) => {
    return state
  }
}, initialState);

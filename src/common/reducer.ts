import { Reducer } from 'redux';
import { createActionHandler, createReducer } from 'utils/redux';
import commonActionConstantsMap from 'common/actions';

export const commonStateKey = 'common';

export interface CommonState {
}

const initialState: CommonState = {
};

export const handleAction = createActionHandler<CommonState>();

export const handleSomeAction = handleAction(commonActionConstantsMap.SOME_ACTION, (state, action) => ({
  ...state
}));

export default createReducer(initialState, [
  handleSomeAction,
]);

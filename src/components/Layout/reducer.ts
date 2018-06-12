import { createActionHandler, createReducer } from 'utils/redux';
import layoutActionConstantsMap from 'components/Layout/actions';

export const layoutStateKey = 'layout';

export interface LayoutState {

}

export const initialState: LayoutState = {

};

export const handleAction = createActionHandler<LayoutState>();

export const handleSomeAction = handleAction(layoutActionConstantsMap.SOME_ACTION, (state, action) => {
  return {
    ...state
  };
});

export default createReducer(initialState, [
  handleSomeAction,
]);

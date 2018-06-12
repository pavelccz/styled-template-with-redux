import { createActionHandler, createReducer } from 'utils/redux';
import pageActionConstantsMap from 'components/Page/actions';

export const pageStateKey = 'page';

export interface PageState {
  number: number;
}

export const initialState: PageState = {
  number: 0,
};

export const handleAction = createActionHandler<PageState>();

export const handleAddNumber = handleAction(pageActionConstantsMap.ADD_NUMBER, (state, action) => {
  return {
    ...state,
    number: state.number + 1
  };
});

export const handleResetNumber = handleAction(pageActionConstantsMap.RESET_NUMBER, (state, action) => {
  return {
    ...state,
    number: initialState.number
  };
});

export const handleSetNumber = handleAction(pageActionConstantsMap.SET_NUMBER, (state, action) => {
  return {
    ...state,
    number: action.payload
  };
});

export default createReducer(initialState, [
  handleAddNumber,
  handleResetNumber,
  handleSetNumber,
]);

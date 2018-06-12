import { actionType, createActionConstantsMap, createActionCreator } from 'utils/redux';

const layoutActionConstantsMap = createActionConstantsMap('layout', {
  ADD_NUMBER: actionType<{}>(),
  RESET_NUMBER: actionType<{}>(),
  SET_NUMBER: actionType<number>(),
});

export const addNumber = createActionCreator(layoutActionConstantsMap.ADD_NUMBER);
export const resetNumber = createActionCreator(layoutActionConstantsMap.RESET_NUMBER);
export const setNumber = createActionCreator(layoutActionConstantsMap.SET_NUMBER);

export default layoutActionConstantsMap;

import { actionType, createActionConstantsMap, createActionCreator } from 'utils/redux';

const layoutActionConstantsMap = createActionConstantsMap('layout', {
  SOME_ACTION: actionType<{}>(),
});

export const someAction = createActionCreator(layoutActionConstantsMap.SOME_ACTION);

export default layoutActionConstantsMap;

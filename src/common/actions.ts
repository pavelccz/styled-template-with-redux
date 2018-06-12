import { actionType, createActionConstantsMap, createActionCreator } from 'utils/redux';

const commonActionConstantsMap = createActionConstantsMap('common', {
  SOME_ACTION: actionType<{}>(),
});

export const someAction = createActionCreator(commonActionConstantsMap.SOME_ACTION);

export default commonActionConstantsMap;

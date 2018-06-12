import { bindActionCreators as reduxBindActionCreators } from 'redux';
import { ActionType, ActionTypeMap, ActionCreator, Action, ActionHandler, TypedActionHandler, ActionCreatorMap, Dispatch } from 'utils/redux';

export function createActionCreator<TPayload>(tp: ActionType<TPayload>): ActionCreator<TPayload> {
  const type = tp.toString();
  return Object.assign((payload: TPayload): Action<TPayload> => ({ type, payload }), { type });
}

export function actionType<TPayload>() {
  return {} as ActionType<TPayload>;
}

export function createActionConstantsMap<T extends ActionTypeMap>(prefix: string, input: T): T {
  const upperCasePrefix = prefix.toUpperCase() + '_';

  const map = Object.keys(input).reduce((acc, key) => {
    const namespacedActionType = upperCasePrefix + key;
    return Object.assign(acc, { [key]: namespacedActionType });
  }, {}) as T;
  return map;
}

export function bindActionCreators<T extends ActionCreatorMap>(actionCreators: T, dispatch: Dispatch): T {
  return reduxBindActionCreators(actionCreators, dispatch);
}

export function createActionHandler<TState>() {
  return <TPayload>(tp: ActionType<TPayload>, handler: ActionHandler<TState, TPayload>): TypedActionHandler<TState, TPayload> => {
    return Object.assign(handler, { actionType: tp.toString() });
  };
}

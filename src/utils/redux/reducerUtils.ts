import { Action, Reducer, TypedActionHandler, TypedActionHandlerMap } from './reduxTypes';
import { isEqual as _isEqual } from 'lodash';

interface GetInitialState<T> {
  (): T;
}

export function createReducer<TState>(initialState: TState | GetInitialState<TState>, handlers: TypedActionHandler<TState, any>[]): Reducer<TState> {
  const handlerMap = handlers.reduce((acc, handler) => {
    return { ...acc, [handler.actionType]: handler };
  }, {} as TypedActionHandlerMap<TState>);
  const getInitialState = typeof initialState === 'function' ? initialState : () => initialState;

  return (state: TState, action: Action<any>) => {
    let newState = state;
    if (typeof state === 'undefined') {
      newState = getInitialState();
    }

    const handler = handlerMap[action.type];
    const superNewState = handler ? handler(newState, action) : newState;
    return _isEqual(newState, superNewState) ? newState : superNewState;
  };
}

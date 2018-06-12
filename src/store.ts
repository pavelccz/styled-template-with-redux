import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux';
import commonReducer, { CommonState, commonStateKey } from 'common/reducer';
import layoutReducer, { LayoutState, layoutStateKey } from 'components/Layout/reducer';
import pageReducer, { PageState, pageStateKey } from 'components/Page/reducer';

export interface RootState {
  readonly common: CommonState;
  readonly layout: LayoutState;
  readonly page: PageState;
  readonly router: RouterState;
}

const rootReducer = combineReducers<RootState>({
  [commonStateKey]: commonReducer,
  [layoutStateKey]: layoutReducer,
  [pageStateKey]: pageReducer,
  router: routerReducer,
});

export const history = createHistory();

const middlewares = [
  routerMiddleware(history)
];

const composeEnhancers = process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;

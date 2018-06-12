import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { Provider } from 'react-redux';
import store, { history } from 'store';
import Layout from 'components/Layout';
import { Route } from 'react-router-dom';
import Routes from 'routes';
import { ConnectedRouter } from 'react-router-redux';

injectGlobal`
  body {
    margin: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route component={Routes} />
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import router from 'utils/router';
import { Page } from 'components/Page';
import NotFound from 'components/NotFound/NotFound';

class Routes extends React.Component<{ location: any }, {}> {
  render() {
    return (
      <Switch location={this.props.location}>
        <Route path={router.page.path} component={Page} exact={true} />

        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;

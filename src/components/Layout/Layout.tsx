import * as React from 'react';
import { MainWrapper } from 'components/Layout/ui';

class Layout extends React.PureComponent<{}, {}> {
  render() {
    return (
      <MainWrapper>
        {this.props.children}
      </MainWrapper>
    );
  }
}

export default Layout;

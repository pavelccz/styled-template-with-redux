import * as React from 'react';
import { Link } from 'react-router-dom';
import router from 'utils/router';
import styled from 'styled-components';
import { RootState } from 'store';
import { connect, Dispatch } from 'react-redux';
import { returnType } from 'utils/redux';
import { compose } from 'redux';

const MainWrapper = styled.div`
  flex-grow: 1;
  padding-top: 64px;
`;

interface LayoutProps {
}

interface LayoutState {
  anchorEl?: any;
}

class Layout extends React.PureComponent<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = { anchorEl: null };
  }

  handleMenu = event => this.setState({ anchorEl: event.currentTarget });

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <MainWrapper>
        {this.props.children}
      </MainWrapper>
    );
  }
}

export default Layout;

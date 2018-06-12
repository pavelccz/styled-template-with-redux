import * as React from 'react';
import { connect } from 'react-redux';
import { returnType, Dispatch, bindActionCreators } from 'utils/redux';
import { RootState } from 'store';
import { setNumber, addNumber, resetNumber } from 'components/Page/actions';
import { createStructuredSelector } from 'reselect';
import { selectNumber } from 'components/Page/selectors';

class Dashboard extends React.Component<AllProps, {}> {
  render() {
    return (
      <div>
        <h1>Page title</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor expedita ut fugit laudantium consectetur maiores temporibus nulla, aliquid, quos odit deserunt eius deleniti animi ullam officiis at minima velit consequuntur.</p>
        <p>number is: <strong>{this.props.number}</strong></p>
        <button onClick={this.props.addNumber}>Add number</button>
        <button onClick={this.props.resetNumber}>Reset number</button>
        <button onClick={() => this.props.setNumber(5)}>Set number 5</button>
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return createStructuredSelector({
    number: selectNumber,
  })(state);
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    addNumber: () => addNumber({}),
    resetNumber: () => resetNumber({}),
    setNumber: (value: number) => setNumber(value),
  }, dispatch);
}

const dispatchGeneric = returnType(mapDispatchToProps);
const stateGeneric = returnType(mapStateToProps);

type DispatchProps = typeof dispatchGeneric;
type StateProps = typeof stateGeneric;
type AllProps = DispatchProps & StateProps;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

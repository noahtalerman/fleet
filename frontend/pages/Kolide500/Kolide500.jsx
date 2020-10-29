import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { resetErrors } from 'redux/nodes/errors/actions';
import errorsInterface from 'interfaces/errors';

import kolideLogo from '../../../assets/images/kolide-logo-condensed.svg';
import gopher from '../../../assets/images/500.svg';

const baseClass = 'kolide-500';

class Kolide500 extends Component {
  static propTypes = {
    errors: errorsInterface,
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    dispatch: noop,
  };

  constructor (props) {
    super(props);

    this.state = {
      showErrorMessage: false,
    };
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(resetErrors());
  }

  onShowErrorMessage = () => {
    this.setState({ showErrorMessage: true });
  }

  renderError = () => {
    const { errors } = this.props;
    const errorMessage = errors ? errors.base : null;
    const { showErrorMessage } = this.state;
    const { onShowErrorMessage } = this;

    if (errorMessage && !showErrorMessage) {
      return (
        <button className="button button--muted" onClick={onShowErrorMessage}>SHOW ERROR</button>
      );
    }

    if (errorMessage) {
      return (
        <div className="error-message-container">
          <p>{errors.base}</p>
        </div>
      );
    }

    return false;
  }

  render () {
    const { renderError } = this;

    return (
      <div className={baseClass}>
        <header className="primary-header">
          <a href="/">
            <img className="primary-header__logo" src={kolideLogo} alt="Kolide" />
          </a>
        </header>
        <main>
          <h1>Uh oh!</h1>
          <h2>Error 500</h2>
          <p>Something went wrong on our end.</p>
          <p>Need assistance? <a href="https://github.com/kolide/fleet/issues">File an issue</a>.</p>
          <div className="gopher-container">
            <img src={gopher} alt="" />
          </div>
          {renderError()}
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { errors } = state.errors;
  return {
    errors,
  };
};

export default connect(mapStateToProps)(Kolide500);

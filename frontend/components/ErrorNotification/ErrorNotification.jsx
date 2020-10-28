import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { noop } from 'lodash';
import { resetErrors } from 'redux/nodes/components/ErrorNotification/actions';

export class ErrorNotification extends Component {
    static propTypes = {
      errors: PropTypes.object,
      isOpen: PropTypes.bool,
      dispatch: PropTypes.func
    };

    static defaultProps = {
      dispatch: noop,
    };

    handleClose = () => {
        const { dispatch } = this.props;
        dispatch(resetErrors())
    }

    render() {
        const { errors } = this.props;
        return (
            <div>
                {errors && (
                <div className='error-notification'>
                    <div className='error-notification__content'>
                        <button onClick={() => {this.handleClose()}}>Close Error</button>
                        <span>{errors.http_status}</span>
                        <span>{errors.base}</span>
                    </div>
                </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const { errors } = state.components.ErrorNotification;
    const { isOpen } = state.components.ErrorNotification;
    return {
        errors,
        isOpen,
    }
}

export default connect(mapStateToProps)(ErrorNotification);

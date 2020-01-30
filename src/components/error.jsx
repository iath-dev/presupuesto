import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
    <p className="alert alert-danger error">{message}</p>
)

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default ErrorMessage;

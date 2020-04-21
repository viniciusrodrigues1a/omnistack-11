import React from 'react';
import { Route as RouteWrapper, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { store } from '../store';

export default function Route({ isPrivate, ...rest }) {
  const { signedIn } = store.getState().auth;

  if (!isPrivate && signedIn) {
    return <Redirect to="/profile" />;
  }

  if (isPrivate && !signedIn) {
    return <Redirect to="/" />;
  }

  return <RouteWrapper {...rest} />;
}

Route.propTypes = {
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: false,
};

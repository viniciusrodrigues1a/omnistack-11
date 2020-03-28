import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput, StyledTextarea, StyledForm } from './styles';

export function Input(props) {
  return <StyledInput {...props} />;
}

export function Textarea(props) {
  return <StyledTextarea {...props} />;
}

export function Form(props) {
  const { children } = props;
  return <StyledForm {...props}>{children}</StyledForm>;
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Form.defaultProps = {
  children: null,
};

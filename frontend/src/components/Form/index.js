import React from 'react';

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

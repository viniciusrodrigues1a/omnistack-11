import React from 'react';

import { IncidentContainer, IncidentProperty, IncidentValue } from './styles';

const Incident = {
  Container: props => <IncidentContainer {...props} />,
  Property: props => {
    const { children } = props;
    return <IncidentProperty {...props}>{children}</IncidentProperty>;
  },
  Value: props => {
    const { children } = props;
    return <IncidentValue {...props}>{children}</IncidentValue>;
  },
};

export default Incident;

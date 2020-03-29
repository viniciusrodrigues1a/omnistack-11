import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import Incident from '../../components/Incident';

export const StyledIncidentContainer = styled(Incident.Container)`
  margin-top: 48px;
`;

export const StyledIncidentProperty = styled(Incident.Property)`
  margin-top: 24px;
`;

export const StyledIncidentValue = styled(Incident.Value)`
  margin-bottom: 0;
`;

export const ContactBox = styled(Incident.Container)``;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled(RectButton)`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;

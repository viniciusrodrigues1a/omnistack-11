import styled from 'styled-components/native';
import Constants from 'expo-constants';

const Container = styled.View`
  flex: 1;
  padding: ${`${Constants.statusBarHeight + 20}px`} 24px 0;
`;

export default Container;

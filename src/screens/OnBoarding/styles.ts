import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const ContinueButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  background-color: #FFF;
  height: 68px;
  width: 68px;

  position: absolute;

  bottom: 24px;

  border-radius: 200px;
  z-index: 1000;
`;
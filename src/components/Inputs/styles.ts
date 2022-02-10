import { TextInput } from 'react-native';
import styled from 'styled-components';
import { fontConfig } from '../../utils/theme';

export const StyledTextField = styled(TextInput)`
  padding: 16px 16px;
  font-family: ${fontConfig.Poppins[400].normal};
  font-size: 14px;
  background-color: #FFF;

  border-radius: 10px;
  width: 100%;
`;
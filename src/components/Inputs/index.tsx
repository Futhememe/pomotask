import React from 'react';
import { TextInputProps } from 'react-native';
import { useI18n } from '../../hooks/i18n';
import { colors } from '../../utils/theme';
import { StyledTextField } from './styles';


export const PomotaskInput = ({ ...rest }: TextInputProps) => {
  const { translate } = useI18n();

  return (
    <StyledTextField 
      {...rest} 
      selectionColor={colors.primary[100]} 
      placeholder={translate('nameQuestion')}
    />
  )
}
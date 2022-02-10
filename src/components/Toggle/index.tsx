import * as React from 'react';
import { Text, HStack, Switch, useColorMode } from 'native-base';
import { useI18n } from '../../hooks/i18n';

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return(
    <HStack space={2} alignItems='center'>
      <Text>Dark</Text>
      <Switch 
        isChecked={colorMode=== 'light'} 
        onToggle={toggleColorMode}
        onTrackColor={'primary.100'}
        onThumbColor={'primary.100'}
      >          
      </Switch>
      <Text>Light</Text>
    </HStack>
  )
}



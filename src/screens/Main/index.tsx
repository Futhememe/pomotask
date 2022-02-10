import * as React from 'react';
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from 'native-base';
import { ThemeToggle } from '../../components/Toggle';
import { useI18n } from '../../hooks/i18n';
import { TaskItem } from '../../components/TaskItem';

export default function MainScreen() {
  const {translate} = useI18n();

  return(
    <Center 
      _dark={{bg: 'blueGray.900'}} 
      _light={{bg: 'secondary.50'}} 
      px={4} 
      flex={1}
     >
       <VStack space={5} alignItems='center'>
          <Box w='100px' h='100px'>
            <TaskItem isDone={true} />
          </Box>
          <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
            <Text>{translate('hello')}</Text>
          </Box>
          <ThemeToggle />
       </VStack>
    </Center> 
  )
}
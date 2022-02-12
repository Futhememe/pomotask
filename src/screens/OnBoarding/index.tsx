import * as React from 'react';
import {
  Text,
  Center,
  VStack,
  Input,
} from 'native-base';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useI18n } from '../../hooks/i18n';
import { PomotaskInput } from '../../components/Inputs';
import { PomotaskIcon } from '../../components/Icons';
import { ContinueButton } from './styles';
import { colors } from '../../utils/theme';

export default function OnboardScreen() {
  const { translate } = useI18n();
  const readDelayValue = 4000;

  const [animationState, setAnimationState] = React.useState<'welcome' | 'name' | 'finish'>('welcome');
  const [name, setName] = React.useState<string>('');

  React.useEffect(() => {
    setTimeout(() => {
      setAnimationState('name')
    }, readDelayValue)
  }, []);

  const handleContinuePress = async () => {
    await setUserInAsyncStorage();

    sayWelcomeToNewUser();
  }

  const setUserInAsyncStorage = async () => {
    await AsyncStorage.setItem('@userName', name);
  }

  const sayWelcomeToNewUser = () => {
    setAnimationState('finish');

    setTimeout(() => {
      console.log(name)
    }, readDelayValue)
  }

  return(
    <Center 
      _dark={{bg: 'primary.100'}} 
      _light={{bg: 'primary.100'}} 
      px={8} 
      flex={1}
    >

      <VStack w={"100%"} space={5} alignItems='flex-start'>
        <AnimatePresence>
          {animationState != 'finish' && (
            <MotiText 
              from={
                animationState == 'welcome' ? 
                { opacity: 0, translateY: 50 } : 
                { opacity: 1, translateY: 50 }
              } 
              animate={
                animationState == 'welcome' ? 
                { opacity: 1, translateY: 50 } : 
                { opacity: 0.5, translateY: -20 }
              }
              exit={{ opacity: 0 }}
              exitTransition={{
                type: 'timing',
                duration: 700
              }}
              transition={{
                type: 'timing',
                duration: animationState == 'welcome' ? 2050 : 700,
              }}
            >
              <Text 
                color={'white'} 
                fontSize='3xl' 
                fontWeight={700}
              >
                {translate('new')}
              </Text>
            </MotiText>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {animationState != 'finish' && (
            <MotiText 
              from={
                animationState == 'welcome' ? 
                { opacity: 0 } : 
                { opacity: 0 }
              } 
              animate={
                animationState == 'welcome' ? 
                { opacity: 0 } : 
                { opacity: 1, translateY: -20 }
              }
              transition={{
                type: 'timing',
                duration: 1000
              }}
              exit={{ opacity: 0 }}
              exitTransition={{
                type: 'timing',
                duration: 700
              }}
            >
              <Text 
                color={'white'} 
                fontSize='3xl' 
                fontWeight={700}
              >
                {translate('nameConfig')}
              </Text>
            </MotiText>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {animationState != 'finish' && (
            <MotiView
              style={{ width: '100%' }}
              from={
                animationState == 'welcome' ? 
                { opacity: 0 } : 
                { opacity: 0 }
              } 
              animate={
                animationState == 'welcome' ? 
                { opacity: 0 } : 
                { opacity: 1, translateY: -20 }
              }
              delay={1000}
              transition={{
                type: 'timing',
                duration: 1000
              }}
              
            >
              <PomotaskInput 
                value={name} 
                onChange={({ nativeEvent: { text } }) => setName(text)} 
              />  
            </MotiView>
          )}
        </AnimatePresence>

        {animationState == 'finish' && (
          <>
            <MotiText 
              from={{ opacity: 0 }} 
              animate={{ opacity: 1, translateY: -15 }}
              delay={1500}
              transition={{
                type: 'timing',
                duration: 2050,
              }}
              exit={{ opacity: 0 }}
            >
              <Text 
                color={'white'} 
                fontSize='3xl' 
                fontWeight={700}
              >
                {translate('hi')}, {name}
              </Text>
            </MotiText>

            <MotiText 
              from={{ opacity: 0, translateY: 20 }} 
              animate={{ opacity: 1, translateY: 0 }}
              delay={3550}
              transition={{
                type: 'timing',
                duration: 2050,
              }}
            >
              <Text 
                color={'white'} 
                fontSize='3xl' 
                fontWeight={700}
              >
                {translate('welcome')}
              </Text>
            </MotiText>
          </>
        )}
      </VStack>

      <AnimatePresence>
        {(name && animationState != 'finish') && (
          <ContinueButton 
            onPress={handleContinuePress}
          >
            <PomotaskIcon 
              name='chevron-right' 
              color={colors.primary[100]} 
              size={40} 
              style={{ marginBottom: -5 }}
            />
          </ContinueButton>
        )} 
      </AnimatePresence>
    </Center> 
  )
}
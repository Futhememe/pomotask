import * as React from 'react';
import {
  Text,
  Center,
  VStack,
  Input,
} from 'native-base';
import { useI18n } from '../../hooks/i18n';
import { AnimatePresence, MotiText, MotiView } from 'moti';
import { PomotaskInput } from '../../components/Inputs';
import { PomotaskIcon } from '../../components/Icons';
import { ContinueButton } from './styles';
import { colors } from '../../utils/theme';

export default function OnboardScreen() {
  const { translate } = useI18n();
  const readDelayValue = 5000;

  const [animationState, setAnimationState] = React.useState<'welcome' | 'name'>('welcome');
  const [name, setName] = React.useState<string>('');

  React.useEffect(() => {
    setTimeout(() => {
      setAnimationState('name')
    }, readDelayValue)
  }, [])

  return(
    <Center 
      _dark={{bg: 'primary.100'}} 
      _light={{bg: 'primary.100'}} 
      px={8} 
      flex={1}
    >
      <VStack w={"100%"} space={5} alignItems='flex-start'>
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
        >
          <Text 
            color={'white'} 
            fontSize='3xl' 
            fontWeight={700}
          >
            {translate('nameConfig')}
          </Text>
        </MotiText>

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
          transition={{
            type: 'timing',
            delay: 1000,
            duration: 1000
          }}
        >
          <PomotaskInput 
            value={name} 
            onChange={({ nativeEvent: { text } }) => setName(text)} 
          />  
        </MotiView>
      </VStack>

      <AnimatePresence>
        {name && (
          <MotiView
            style={{ 
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              bottom: 0
            }}
            from={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{
              type: 'timing',
              duration: 1000
            }}
            exit={{opacity: 0}}
          >
            <ContinueButton>
              <PomotaskIcon 
                name='chevron-right' 
                color={colors.primary[100]} 
                size={40} 
                style={{ marginBottom: -5 }}
              />
            </ContinueButton>
          </MotiView>
        )}
      </AnimatePresence>
    </Center> 
  )
}
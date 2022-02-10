import React from 'react';
import {
  Pressable
} from 'react-native';
import { Box, useTheme, themeTools, useColorModeValue } from 'native-base';

interface TaskItemProps {
  isDone: boolean;
}

export const TaskItem = ({ isDone }: TaskItemProps) => {
  const theme = useTheme();

  const highlightColor = themeTools.getColor(
    theme,
    useColorModeValue('primary.100', 'primary.100')
  );

  const boxStroke = themeTools.getColor(
    theme,
    useColorModeValue('muted.300', 'muted.500')
  );

  const checkmarkColor = themeTools.getColor(
    theme,
    useColorModeValue('white', 'white')
  );

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText')
  );

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.600')
  );

  return (
    <Box width={30} height={30} mr={2}>
      <Pressable>
        {/* <AnimatedCheckbox 
          highlightColor={highlightColor}
          checkmarkColor={checkmarkColor}
          boxOutlineColor={boxStroke}
          checked={isDone}
        /> */}
      </Pressable>
    </Box>
  )
}
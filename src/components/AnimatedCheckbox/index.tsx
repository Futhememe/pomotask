import React, { memo } from 'react';
import Animated, {
  Easing, useSharedValue, useAnimatedProps, withTiming, interpolateColor
} from 'react-native-reanimated';
import Svg, { Path, Defs, ClipPath, G } from 'react-native-svg';

const MARGIN = 40;
const vWidth = 64 + MARGIN;
const vHeight = 64 + MARGIN;
const checkMarkPath = 'M22.1376 50.8931L42.7482 73.0305C50.6363 57.7633 73.1299 21.8855 100 0.511444';
const outlineBoxPath = 'M22.9007 8.38171H71.7557V6.38171H22.9007V8.38171ZM93.6564 30.2825V79.1374H95.6564V30.2825H93.6564ZM71.7557 101.038H22.9007V103.038H71.7557V101.038ZM1 79.1374V30.2824H-1V79.1374H1ZM22.9007 101.038C10.8053 101.038 1 91.2328 1 79.1374H-1C-1 92.3374 9.7007 103.038 22.9007 103.038V101.038ZM93.6564 79.1374C93.6564 91.2328 83.8511 101.038 71.7557 101.038V103.038C84.9557 103.038 95.6564 92.3374 95.6564 79.1374H93.6564ZM71.7557 8.38171C83.8511 8.38171 93.6564 18.187 93.6564 30.2825H95.6564C95.6564 17.0824 84.9557 6.38171 71.7557 6.38171V8.38171ZM22.9007 6.38171C9.70073 6.38171 -1 17.0824 -1 30.2824H1C1 18.187 10.8053 8.38171 22.9007 8.38171V6.38171Z'

export const AnimatedCheckbox = () => {
  const checkmarkColor = '#000000';
  const highlightColor = '#FF0000';
  const boxoutlineColor = '#000000';

  return(
    <Svg viewBox={[-MARGIN, -MARGIN, vWidth + MARGIN, vHeight + MARGIN].join(' ')}>
      <Path 
        d={outlineBoxPath} 
        fill="black" 
      />
      <Path 
        d={checkMarkPath} 
        stroke="black" 
        stroke-linecap="round"
      />
    </Svg>
  )
}

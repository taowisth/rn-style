/* @flow */

import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export default props => (
    <Svg viewBox='0 0 24 24' height='24' width='24' {...props}>
        <Path
            d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'
            fill={props.tintColor || '#fff'}
        />
    </Svg>
);
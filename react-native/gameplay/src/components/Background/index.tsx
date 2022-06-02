import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

import React from 'react';

export function Background({ children }: any) {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}

import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      if (!fontsLoaded) {
        try {
          await SplashScreen.preventAutoHideAsync();
        } catch (e) {
          console.warn(e);
        }
      } else await SplashScreen.hideAsync();
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </Background>
  );
}

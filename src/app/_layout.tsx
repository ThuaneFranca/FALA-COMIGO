import * as Font from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync(); // Evita que a tela desapareça antes da fonte carregar

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Aqui você carrega a fonte com o caminho correto
    Font.loadAsync({
      'ComicRelief': require('../../assets/fonts/ComicRelief-Bold.ttf'),
	    'RubikDirt-Regular': require('../../assets/fonts/RubikDirt-Regular.ttf'),
      'Flavors-Regular': require('../../assets/fonts/Flavors-Regular.ttf'),
      'ComicRelief-Bold': require('../../assets/fonts/ComicRelief-Bold.ttf'),
      'DeliusUnicase-Regular': require('../../assets/fonts/DeliusUnicase-Regular.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Esconde a splash screen depois que as fontes forem carregadas
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null; // Espera a fonte carregar antes de renderizar

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Slot />
    </View>
  );
}

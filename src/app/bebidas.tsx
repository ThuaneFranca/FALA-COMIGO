import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from '../styles/bebidas';

export default function Bebidas() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox} />
      <Text style={styles.title}>BEBIDAS</Text>

      <View style={styles.card} />
      <ImageBackground style={styles.image} source={require('../assets/ICONES/ALIMENTOS/bebidas/drink.png')} />
      <Text style={styles.label}>AGUA</Text>

      <View style={styles.card} />
      <ImageBackground style={styles.image}  source={require('../assets/ICONES/ALIMENTOS/bebidas/drink.png')} />
      <Text style={styles.label}>SUCO</Text>

      <View style={styles.card} />
      <ImageBackground style={styles.image} source={require('../assets/ICONES/ALIMENTOS/bebidas/drink.png')} />
      <Text style={styles.label}>LEITE</Text>

      <View style={styles.card} />
      <ImageBackground style={styles.image}  source={require('../assets/ICONES/ALIMENTOS/bebidas/drink.png')} />
      <Text style={styles.label}>ACHOCOLATADO</Text>

      <View style={styles.card} />
      <ImageBackground style={styles.image} source={require('../assets/ICONES/ALIMENTOS/bebidas/drink.png')} />
      <Text style={styles.label}>REFRIGENTE</Text>

      <View style={styles.card} />
      <ImageBackground style={styles.image}  source={require('../assets/ICONES/ALIMENTOS/bebidas/drink.png')} />
      <Text style={styles.label}>IORGUTE</Text>

      {/* Adicione os demais blocos similares para LEITE, ACHOCOLATADO, etc. */}

      <View style={styles.helpButton}>
        <Text style={styles.helpText}>AJUDA</Text>
      </View>
    </View>
  );
}

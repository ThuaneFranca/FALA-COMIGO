import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/doces'; // estilo separado

export default function Doces() {
  const router = useRouter();

  const doces = [
    { nome: 'SORVETE', imagem: require('../assets/ICONES/ALIMENTOS/doces/ice-cream.png') },
    { nome: 'BISCOITO', imagem: require('../assets/ICONES/ALIMENTOS/doces/biscuits.png') },
    { nome: 'BOLO', imagem: require('../assets/ICONES/ALIMENTOS/doces/cake.png') },
    { nome: 'CHOCOLATE', imagem: require('../assets/ICONES/ALIMENTOS/doces/chocolate.png') },
    { nome: 'AÇAÍ', imagem: require('../assets/ICONES/ALIMENTOS/doces/acai.png') },
    { nome: 'GULOSEIMAS', imagem: require('../assets/ICONES/ALIMENTOS/doces/sweets.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.title}>DOCES</Text>
      </View>

      <View style={styles.grid}>
        {doces.map((doce, index) => (
          <View key={index} style={styles.card}>
            <Image source={doce.imagem} style={styles.image} />
            <Text style={styles.label}>{doce.nome}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.helpButton} onPress={() => router.push('/ajuda')}>
        <Text style={styles.helpText}>AJUDA</Text>
      </TouchableOpacity>
    </View>
  );
}

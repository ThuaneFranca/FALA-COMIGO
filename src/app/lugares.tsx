import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { lugaresStyles as styles } from '../styles/lugares';

// Lista de lugares com nome e imagem
const lugares = [
  { nome: 'CASA',       imagem: require('../assets/ICONES/LUGARES/house.png') },
  { nome: 'ESCOLA',     imagem: require('../assets/ICONES/LUGARES/school.png') },
  { nome: 'VOVÓ/VOVÔ',  imagem: require('../assets/ICONES/LUGARES/man.png') },
  { nome: 'PARQUINHO',  imagem: require('../assets/ICONES/LUGARES/playground.png') },
  { nome: 'CINEMA',     imagem: require('../assets/ICONES/LUGARES/premiere.png') },
  { nome: 'SHOPPING',   imagem: require('../assets/ICONES/LUGARES/shopping-mall.png') },
];

export default function Lugares() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>LUGARES</Text>
      </View>

      {/* Grade de cards klickáveis */}
      <View style={styles.grid}>
        {lugares.map(({ nome, imagem }, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push('/lugares')}
          >
            <Image source={imagem} style={styles.cardImage} />
            <Text style={styles.cardText}>{nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão AJUDA */}
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>AJUDA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

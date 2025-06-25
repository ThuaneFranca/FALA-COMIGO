import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { animaisStyles as styles } from '../styles/animais';

// Lista de animais com nome e imagem
const animais = [
  { nome: 'GATO',        imagem: require('../assets/ICONES/ANIMAIS/cat.png') },
  { nome: 'CACHORRO',    imagem: require('../assets/ICONES/ANIMAIS/dog.png') },
  { nome: 'COELHO',      imagem: require('../assets/ICONES/ANIMAIS/rabbit.png') },
  { nome: 'CAVALO',      imagem: require('../assets/ICONES/ANIMAIS/horse.png') },
  { nome: 'LEÃO',        imagem: require('../assets/ICONES/ANIMAIS/lion.png') },
  { nome: 'URSO',        imagem: require('../assets/ICONES/ANIMAIS/bear.png') },
  { nome: 'PÁSSARO',     imagem: require('../assets/ICONES/ANIMAIS/robin.png') },
  { nome: 'ABELHA',      imagem: require('../assets/ICONES/ANIMAIS/bee.png') },
  { nome: 'TUBARÃO',     imagem: require('../assets/ICONES/ANIMAIS/shark.png') },
  { nome: 'PORCO',       imagem: require('../assets/ICONES/ANIMAIS/pig.png') },
  { nome: 'ELEFANTE',    imagem: require('../assets/ICONES/ANIMAIS/elephant.png') },
  { nome: 'VACA',        imagem: require('../assets/ICONES/ANIMAIS/cow.png') },
  { nome: 'GALINHA',     imagem: require('../assets/ICONES/ANIMAIS/hen.png') },
  { nome: 'GIRAFA',      imagem: require('../assets/ICONES/ANIMAIS/giraffe.png') },
  { nome: 'ZEBRA',       imagem: require('../assets/ICONES/ANIMAIS/zebra.png') },
];

export default function Animais() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>ANIMAIS</Text>
      </View>

      {/* Grid responsiva de cards */}
      <View style={styles.grid}>
        {animais.map(({ nome, imagem }, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push('/animais')}
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

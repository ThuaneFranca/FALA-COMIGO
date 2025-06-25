import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { aprenderStyles as styles } from '../styles/aprender';

// Lista de itens de material escolar
const materiais = [
  { nome: 'CADERNO',      imagem: require('../assets/ICONES/APRENDER/sketchbook.png') },
  { nome: 'BORRACHA',     imagem: require('../assets/ICONES/APRENDER/eraser.png') },
  { nome: 'LIVRO',        imagem: require('../assets/ICONES/APRENDER/stack-of-books.png') },
  { nome: 'LÁPIS',        imagem: require('../assets/ICONES/APRENDER/pencil.png') },
  { nome: 'LÁPIS DE COR', imagem: require('../assets/ICONES/APRENDER/color-pencils.png') },
  { nome: 'CANETA',       imagem: require('../assets/ICONES/APRENDER/markers.png') },
  { nome: 'TESOURA',      imagem: require('../assets/ICONES/APRENDER/scissors.png') },
  { nome: 'RÉGUA',        imagem: require('../assets/ICONES/APRENDER/ruler.png') },
  { nome: 'CANETINHA',    imagem: require('../assets/ICONES/APRENDER/markers.png') },
  { nome: 'MOCHILA',      imagem: require('../assets/ICONES/APRENDER/school-bag.png') },
];

export default function Aprender() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>APRENDER</Text>
      </View>

      {/* Grid responsiva de cards */}
      <View style={styles.grid}>
        {materiais.map(({ nome, imagem }, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push('/aprender')}
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

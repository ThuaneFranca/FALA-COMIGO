import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { emocoesStyles as styles } from '../styles/emocoes';

// Lista de categorias com imagem e nome, só exemplo
const categorias = [
  { nome: 'TRISTE', imagem: require('../assets/ICONES/EMOCOES/sad.png') },
  { nome: 'SEDE', imagem: require('../assets/ICONES/EMOCOES/drink-water.png') },
  { nome: 'FELIZ', imagem: require('../assets/ICONES/EMOCOES/happy.png') },
  { nome: 'BRAVO', imagem: require('../assets/ICONES/EMOCOES/BRAVO.png') },
  { nome: 'FOME', imagem: require('../assets/ICONES/EMOCOES/hungry.png') },
  { nome: 'BARULHO', imagem: require('../assets/ICONES/EMOCOES/noisy.png') },
  { nome: 'DOR', imagem: require('../assets/ICONES/EMOCOES/headache.png') },
  { nome: 'SONO', imagem: require('../assets/ICONES/EMOCOES/tired.png') },
  { nome: 'CALOR', imagem: require('../assets/ICONES/EMOCOES/hot-weather.png') },
  { nome: 'FRIO', imagem: require('../assets/ICONES/EMOCOES/cold.png') },
];

export default function Emocoes() {
  return (
    // ScrollView com padding bottom para dar espaço ao botão
    <ScrollView contentContainerStyle={styles.container}>

      {/* Título com fundo arredondado igual Higiene */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>EMOÇÕES</Text>
      </View>

      {/* Grid com cards - iguais em tamanho e borda */}
      <View style={styles.grid}>
        {categorias.map(({ nome, imagem }, index) => (
          <View key={index} style={styles.card}>
            <Image source={imagem} style={styles.cardImage} />
            <Text style={styles.cardText}>{nome}</Text>
          </View>
        ))}
      </View>

      {/* Botão AJUDA igual ao da tela Higiene */}
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>AJUDA</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { atividadesStyles as styles } from '../styles/atividades';

// Lista de atividades com nome e imagem
const atividades = [
  { nome: 'TV',           imagem: require('../assets/ICONES/ATIVIDADES/television.png') },
  { nome: 'VIDEO GAME',   imagem: require('../assets/ICONES/ATIVIDADES/game-console.png') },
  { nome: 'LER',          imagem: require('../assets/ICONES/ATIVIDADES/read.png') },
  { nome: 'COLORIR',      imagem: require('../assets/ICONES/ATIVIDADES/drawing.png') },
  { nome: 'CORRER',       imagem: require('../assets/ICONES/ATIVIDADES/run.png') },
  { nome: 'BRINCAR',      imagem: require('../assets/ICONES/ATIVIDADES/kindergarten.png') },
  { nome: 'JOGAR BOLA',   imagem: require('../assets/ICONES/ATIVIDADES/football.png') },
  { nome: 'DESENHAR',     imagem: require('../assets/ICONES/ATIVIDADES/drawing.png') },
  { nome: 'NADAR',        imagem: require('../assets/ICONES/ATIVIDADES/swimmer.png') },
  { nome: 'OUVIR MÚSICA', imagem: require('../assets/ICONES/ATIVIDADES/listen.png') },
];

export default function Atividades() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>ATIVIDADES</Text>
      </View>

      {/* Grid de cards clicáveis */}
      <View style={styles.grid}>
        {atividades.map(({ nome, imagem }, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => router.push('/atividades')}
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

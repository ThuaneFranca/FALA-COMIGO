import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/frutas';

const frutas = [
  { nome: 'MAÇÃ', imagem: require('../assets/ICONES/ALIMENTOS/frutas/apple.png') },
  { nome: 'MORANGO', imagem: require('../assets/ICONES/ALIMENTOS/frutas/strawberry.png') },
  { nome: 'UVA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/grapes.png') },
  { nome: 'MELANCIA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/watermelon.png') },
  { nome: 'MELÃO', imagem: require('../assets/ICONES/ALIMENTOS/frutas/melon.png') },
  { nome: 'MAMÃO', imagem: require('../assets/ICONES/ALIMENTOS/frutas/papaya.png') },
  { nome: 'LARANJA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/orange.png') },
  { nome: 'BANANA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/banana.png') },
  { nome: 'ABACAXI', imagem: require('../assets/ICONES/ALIMENTOS/frutas/pineapple.png') },
  { nome: 'GOIABA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/fruit (1).png') },
  { nome: 'KIWI', imagem: require('../assets/ICONES/ALIMENTOS/frutas/kiwi.png') },
  { nome: 'PERA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/pear.png') },
  { nome: 'AMORA', imagem: require('../assets/ICONES/ALIMENTOS/frutas/mulberry.png') },
];

export default function Frutas() {
  return ( 
    <ScrollView contentContainerStyle={styles.container}> 
      <Text style={styles.titulo}>FRUTAS</Text>

      <View style={styles.grid}> 
        {frutas.map(({ nome, imagem }, index) => (
          <View key={index} style={styles.item}>
            <Image style={styles.imagem} source={imagem} />
            <Text style={styles.legenda}>{nome}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.botaoAjuda}>
        <Text style={styles.textoAjuda}>AJUDA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

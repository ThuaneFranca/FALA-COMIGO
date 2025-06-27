import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/bebidas';

export default function Bebidas() {
  // Lista de bebidas com nome e imagem
  const bebidas = [
    { nome: 'ÁGUA', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/agua.png') },
    { nome: 'SUCO', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/juice-box.png') },
    { nome: 'LEITE', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/milk.png') },
    { nome: 'ACHOCOLATADO', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/chocolate-milk.png') },
    { nome: 'REFRIGERANTE', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/refrigerante.png') },
    { nome: 'IORGUTE', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/yogurt.png') },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: '#A6D3F2' }}>
      <View style={styles.container}>
        {/* Cabeçalho arredondado */}
        <View style={styles.headerBox} />
        <Text style={styles.title}>BEBIDAS</Text>

        {/* Grade com 2 colunas */}
        <View style={styles.grid}>
          {bebidas.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.imagem} style={styles.image} />
              <Text style={styles.label}>{item.nome}</Text>
            </View>
          ))}
        </View>

        {/* Botão de ajuda padrão */}
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>AJUDA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

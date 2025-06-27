// Tela Higiene - Layout com grid em duas colunas
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/higiene';

export default function Higiene() {
  // Lista com os itens de higiene
  const higiene = [
    { nome: 'BANHO', imagem: require('../assets/ICONES/HIGIENE/shower.png') },
    { nome: 'ESCOVAR DENTES', imagem: require('../assets/ICONES/HIGIENE/tooth-cleaning.png') },
    { nome: 'CABELO', imagem: require('../assets/ICONES/HIGIENE/hair-comb.png') },
    { nome: 'ROUPAS', imagem: require('../assets/ICONES/HIGIENE/clothes.png') },
    { nome: 'XIXI / COCÔ', imagem: require('../assets/ICONES/HIGIENE/toilet.png') },
    { nome: 'LAVAR AS MÃOS', imagem: require('../assets/ICONES/HIGIENE/washing.png') },
  ];

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: '#A6D3F2' }}>
      <View style={styles.container}>
        {/* Título com fundo arredondado */}
        <View style={styles.titleBackground}>
          <Text style={styles.title}>HIGIENE</Text>
        </View>

        {/* Grade de ícones em duas colunas */}
        <View style={styles.grid}>
          {higiene.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.imagem} style={styles.icon} />
              <Text style={styles.cardText}>{item.nome}</Text>
            </View>
          ))}
        </View>

        {/* Botão de Ajuda padrão */}
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>AJUDA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

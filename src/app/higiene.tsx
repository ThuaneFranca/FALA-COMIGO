// Tela Higiene - Estilo organizado
import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/higiene';

export default function Higiene() {
  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>HIGIENE</Text>
      </View>
      
      {/* Cards da tela */}
      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={require('../assets/ICONES/HIGIENE/shower.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>BANHO</Text>
        </View>

        <View style={styles.card}> 
          <Image
            source={require('../assets/ICONES/HIGIENE/tooth-cleaning.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>ESCOVAR DENTES</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={require('../assets/ICONES/HIGIENE/hair-comb.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>CABELO</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/ICONES/HIGIENE/clothes.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>ROUPAS</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.card}>
          <Image
            source={require('../assets/ICONES/HIGIENE/toilet.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>XIXI / COCÔ</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={require('../assets/ICONES/HIGIENE/washing.png')}
            style={styles.icon}
          />
          <Text style={styles.cardText}>LAVAR AS MÃOS</Text>
        </View>
      </View>

      {/* Botão de Ajuda */}
      <View style={styles.helpButton}>
        <Text style={styles.helpText}>AJUDA</Text>
      </View>
    </View>
  );
}

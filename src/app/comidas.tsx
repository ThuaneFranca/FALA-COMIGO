// app/comidas.tsx

import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from '../styles/comidas'; // Importando estilos externos

export default function Comidas() {
  // Instanciando o roteador
  // Isso permite navegar entre as telas da aplicação
  //const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>COMIDAS</Text>

      <View style={styles.grid}>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/rice-bowl.png')} />
          <Text style={styles.label}>ARROZ</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/red-beans.png')} />
          <Text style={styles.label}>FEIJÃO</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/chicken-leg.png')} />
          <Text style={styles.label}>FRANGO</Text>
        </View>

        {/* Adicione os outros itens de comida da mesma forma */}
      </View>

      <View style={styles.ajudaButton}>
        <Text style={styles.ajudaTexto}>AJUDA</Text>
      </View>
    </ScrollView>
  );
}

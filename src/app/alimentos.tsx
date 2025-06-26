import { useRouter } from 'expo-router'; // Importa o roteador do Expo Router
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { alimentosStyles as styles } from '../styles/alimentos';

// Categorias e imagens
const categorias = [
  { nome: 'COMIDA', imagem: require('../assets/ICONES/ALIMENTOS/comidas/cutlery.png') },
  { nome: 'BEBIDAS', imagem: require('../assets/ICONES/ALIMENTOS/bebidas/drink.png') },
  { nome: 'DOCES', imagem: require('../assets/ICONES/ALIMENTOS/doces/sweets.png') },
  { nome: 'FRUTAS', imagem: require('../assets/ICONES/ALIMENTOS/frutas/fruit.png') },
];

export default function Alimentos() {
  const router = useRouter(); // Instancia o roteador
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título com fundo azul */}
      <View style={styles.titleBackground}>
        <Text style={styles.title}>ALIMENTOS</Text>
      </View>

      {/* Grid dos cards */}
      <View style={styles.grid}> 
        {categorias.map((item, index) => (
          
          
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              // Navegação futura para cada categoria
              if (item.nome === 'COMIDA') {
                router.push('/comidas'); // Navega para "COMIDAS"
              }
              else if (item.nome === 'BEBIDAS') {
                router.push('/bebidas'); // Navega para "BEBIDAS"
              }
              else if (item.nome === 'DOCES') {
                router.push('/doces'); // Navega para "DOCES"
              }
              else if (item.nome === 'FRUTAS') {
                router.push('/frutas'); // Navega para "FRUTAS"
              }
            }}
          >

            <Image source={item.imagem} style={styles.cardImage} /> 
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão ajuda */}
      <TouchableOpacity style={styles.helpButton}>
        <Text style={styles.helpButtonText}>AJUDA</Text>
      </TouchableOpacity>
    </ScrollView>
  );      
}

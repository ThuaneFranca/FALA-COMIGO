import { useRouter } from 'expo-router'; // 👈 Importa o roteador
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/meudia';

const categorias = [
  { nome: 'ROTINAS', imagem: require('../assets/ICONES/ROTINAS/morning-routine (1).png'), cor: '#BD9DFA' },
  { nome: 'EMOÇÕES', imagem: require('../assets/ICONES/ROTINAS/feedback.png'), cor: '#FFA8CE' },
  { nome: 'ALIMENTOS', imagem: require('../assets/ICONES/ROTINAS/diet.png'), cor: '#946EFF' },
  { nome: 'LUGARES', imagem: require('../assets/ICONES/ROTINAS/3d-map.png'), cor: '#41C0A9' },
  { nome: 'ANIMAIS', imagem: require('../assets/ICONES/ROTINAS/livestock.png'), cor: '#D4C29D' },
  { nome: 'APRENDER', imagem: require('../assets/ICONES/ROTINAS/education.png'), cor: '#EAF7B5' },
  { nome: 'ATIVIDADES', imagem: require('../assets/ICONES/ROTINAS/playtime (1).png'), cor: '#FFB6B6' },
  { nome: 'CONFIGURAÇOES', imagem: require('../assets/ICONES/ROTINAS/gear.png'), cor: '#A6D3F2' },
];

export default function MeuDia() {
  const router = useRouter(); // 👈 Instancia o roteador

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleBackground}>
        <Text style={styles.title}>MEU DIA</Text>
      </View>

       {/* Grid dos cards */}
      <View style={styles.grid}>
        {categorias.map((item, index) => (
          
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: item.cor }]}
            onPress={() => { // 👈 Adiciona a navegação ao pressionar o card
              if (item.nome === 'ROTINAS') {
                router.push('/higiene'); // 👈 Navega apenas se for "ROTINAS"
              }
              else if (item.nome === 'EMOÇÕES') {
                router.push('/emocoes'); // 👈 Navega para "EMOÇÕES"
              }
              else if (item.nome === 'ALIMENTOS') {
                router.push('/alimentos'); // 👈 Navega para "ALIMENTOS"
              }
              else if (item.nome === 'COMIDAS') {
                router.push('/comidas'); // 👈 Navega para "COMIDAS"
              }
              else if (item.nome === 'LUGARES') {
                router.push('/lugares'); // 👈 Navega para "LUGARES"
              } 
              else if (item.nome === 'ANIMAIS') {
                router.push('/animais'); // 👈 Navega para "ANIMAIS"
              } 
              else if (item.nome === 'APRENDER') {
                router.push('/aprender'); // 👈 Navega para "APRENDER"
              }
              else if (item.nome === 'ATIVIDADES') {
                router.push('/atividades'); // 👈 Navega para "ATIVIDADES"
              }
            
             
              // Você pode adicionar outros ifs para navegar para "emoções", "alimentos" etc.
            }}

          >
            <Image source={item.imagem} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

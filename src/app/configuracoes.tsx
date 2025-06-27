// app/configuracoes.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/configuracoes';

export default function Configuracoes() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>CONFIGURAÇÕES</Text>

        <View style={styles.caixa}>
          <ImageBackground
            style={styles.icone}
            source={require('../assets/ICONES/CONFIGURACOES/notificar.png')}
          />
          <Text style={styles.texto}>NOTIFICAÇÕES</Text>
        </View>

        <View style={styles.caixa}>
          <ImageBackground
            style={styles.icone}
            source={require('../assets/ICONES/CONFIGURACOES/pecs.png')}
          />
          <Text style={styles.texto}>PECS (Personalizadas)</Text>
        </View>

        <View style={styles.caixa}>
          <ImageBackground
            style={styles.icone}
            source={require('../assets/ICONES/CONFIGURACOES/compartilhar.png')}
          />
          <Text style={styles.texto}>COMPARTILHAR COM AMIGOS</Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.texto}>GERENCIAR ROTINAS</Text>
        </View>

        <View style={styles.caixa}>
          <Text style={styles.texto}>CONTATO</Text>
          <Text style={styles.label}>NOME:</Text>
          <View style={styles.input} />
          <Text style={styles.label}>E-MAIL:</Text>
          <View style={styles.input} />
          <Text style={styles.label}>MENSAGEM:</Text>
          <View style={styles.areaMensagem} />
        </View>

        <TouchableOpacity style={styles.botaoAjuda} onPress={() => alert('Ajuda')}>
          <Text style={styles.textoAjuda}>Precisa de ajuda?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

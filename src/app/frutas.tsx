import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/frutas';

export default function Frutas() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.voltar}>
        <Image source={require('../assets/ICONES/ALIMENTOS/frutas/fruit.png')} style={styles.iconeVoltar} />
      </TouchableOpacity>

      <Text style={styles.titulo}>FRUTAS</Text>

      <View style={styles.grid}>
        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/apple.png')} />
          <Text style={styles.legenda}>MAÇÃ</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/strawberry.png')} />
          <Text style={styles.legenda}>MORANGO</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/grapes.png')} />
          <Text style={styles.legenda}>UVA</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/watermelon.png')} />
          <Text style={styles.legenda}>MELANCIA</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/melon.png')} />
          <Text style={styles.legenda}>MELÃO</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/papaya.png')} />
          <Text style={styles.legenda}>MAMÃO</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/orange.png')} />
          <Text style={styles.legenda}>LARANJA</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/banana.png')} />
          <Text style={styles.legenda}>BANANA</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/pineapple.png')} />
          <Text style={styles.legenda}>ABACAXI</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/fruit (1).png')} />
          <Text style={styles.legenda}>GOIABA</Text>
        </View>

    
        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/kiwi.png')} />
          <Text style={styles.legenda}>KIWI</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/pear.png')} />
          <Text style={styles.legenda}>PERA</Text>
        </View>

        <View style={styles.item}>
          <Image style={styles.imagem} source={require('../assets/ICONES/ALIMENTOS/frutas/mulberry.png')} />
          <Text style={styles.legenda}>AMORA</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botaoAjuda}>
        <Text style={styles.textoAjuda}>AJUDA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

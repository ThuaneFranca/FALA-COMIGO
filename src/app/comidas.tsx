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
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/spaghetti.png')} />
          <Text style={styles.label}>MACARRÃO</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/chicken-leg.png')} />
          <Text style={styles.label}>FRANGO</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/fried-egg.png')} />
          <Text style={styles.label}>OVO</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/meat.png')} />
          <Text style={styles.label}>CARNE</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/fries.png')} />
          <Text style={styles.label}>BATATA FRITA</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/sausages.png')} />
          <Text style={styles.label}>SALSICHA</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/fish-and-chips.png')} />
          <Text style={styles.label}>PEIXE</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/white-bread.png')} />
          <Text style={styles.label}>PÃO</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/popcorn.png')} />
          <Text style={styles.label}>PIPOCA</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/hamburgers.png')} />
          <Text style={styles.label}>HAMBURGER</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/pizza.png')} />
          <Text style={styles.label}>PIZZA</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/hotdog.png')} />
          <Text style={styles.label}>HOT DOG</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/coffee-break.png')} />
          <Text style={styles.label}>CAFÉ DA MANHÃ</Text>
        </View>
        <View style={styles.item}>
          <Image style={styles.image} source={require('../assets/ICONES/ALIMENTOS/comidas/cheese.png')} />
          <Text style={styles.label}>QUEIJO</Text>
        </View>


        {/* Adicione os outros itens de comida da mesma forma */}
      </View>

      <View style={styles.ajudaButton}>
        <Text style={styles.ajudaTexto}>AJUDA</Text>
      </View>
    </ScrollView>
  );
}

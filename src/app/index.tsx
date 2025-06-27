import { useRouter } from 'expo-router'; // Hook de navegação
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';


const { width } = Dimensions.get('window'); // Captura a largura da tela para responsividade

export default function HomeScreen() {
  const router = useRouter(); // Navegação entre telas

  return (
    // Imagem de fundo com nuvens (padrão visual mais acolhedor)
    
    <ImageBackground
      source={require('../assets/LOGO/FUNDO.png')} // Substitua pela sua imagem real
      style={styles.background}
      resizeMode="cover" // Redimensiona a imagem para cobrir o fundo
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          
          {/* Título estilizado com sombra e espaçamento */}
          <Text style={styles.title}>FALA COMIGO</Text>

          {/* Logo centralizada */}
          <Image
            source={require('../assets/LOGO/LOGO TRANSP.png')}
            style={styles.logo}
          />

          {/* Botão de entrada com visual moderno e acessível */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/meu-dia')} // Navega para a tela Meu Dia
          >
            <Text style={styles.buttonText}>INICIAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}





// Estilos diretos com comentários
const styles = StyleSheet.create({ 
  background: {
    flex: 1,
    width: '100%',
    height: '100%', // Ocupa toda a tela
  },
  container: { // Container principal com espaçamento e alinhamento
    flex: 1,
    backgroundColor: 'transparent', // Fundo transparente para mostrar a imagem
  },
  scrollView: { // Container do ScrollView com alinhamento central
    flexGrow: 1, // Permite rolagem quando necessário
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40, // Espaçamento interno
  },
  title: { // Título (FALA COMIGO)
    fontFamily: 'Flavors-Regular', // Fonte manuscrita amigável
    fontSize: 80, // Tamanho grande para destaque
    textAlign: 'center',
    marginBottom: 10, // Espaçamento abaixo do título
    padding: 10, // Espaçamento interno
    color: '#082588', // Cor escura e visível
    textShadowColor: 'rgba(0, 0, 0, 0.30)', // Sombra discreta
    textShadowOffset: { width:5, height: 8 }, // Deslocamento da sombra
    textShadowRadius: 30, // Raio da sombra
    letterSpacing: 2, // Espaço entre letras
  },

  logo: { // Logo centralizada com responsividade
    width: width * 1.2, // Responsivo com base na tela
    height: width * 1.3,
    marginBottom: -60,
    resizeMode: 'contain',
  },

  button: { // Botão de INICIAR com estilo moderno
    backgroundColor: '#6ACAFF',
    borderRadius: 82,
    paddingVertical: 20,
    paddingHorizontal: 38,
    elevation: 8, // Sombra no Android
    shadowColor: '#002162', // Sombra no iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  // Botão de INICIAR com estilo moderno
  buttonText: { // Texto do botão com fonte grande e espaçamento
    color: '#082588',
    fontSize: 30,
    fontFamily: 'Flavors-Regular', // Fonte moderna e legível
    letterSpacing: 1, // Espaço entre letras
  },
});

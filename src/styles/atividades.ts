import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const atividadesStyles = StyleSheet.create({
  // Container do ScrollView
  container: {
    backgroundColor: 'rgba(166, 211, 242, 1)',
    minHeight: height,
    paddingTop: 70,
    paddingBottom: 30,
    alignItems: 'center',
  },

  // Fundo arredondado do título
  titleBackground: {
    width: 229,
    height: 46,
    backgroundColor: '#6ACBFF',
    borderRadius: 82,
    //borderWidth: 1,
    borderColor: '#3700DD',
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -40,
  },

  // Texto do título
  title: {
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Grid responsiva
  grid: { // Grid para organizar os cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 90,
    gap: 20,
  },

  // Card padrão
  card: { // Card individual
    width: 165,
    height: 175,
    backgroundColor: 'rgba(41, 171, 194, 1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  // Imagem dentro do card
  cardImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
    //resizeMode: 'contain',
  },

  // Texto do card
  cardText: { // Texto dentro do card
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Botão AJUDA (mesmo padrão)
  helpButton: {
    marginTop: 30, // Espaçamento acima do botão
    width: 150, // Largura do botão
    height: 50, // Altura do botão
    backgroundColor: '#6ACBFF', // Cor de fundo do botão
    borderRadius: 12, // Borda arredondada do botão
    borderWidth: 1, // Borda do botão
    borderColor: '#3700DD', // Cor da borda do botão
    shadowColor: 'rgba(0, 2, 98, 1)', // Cor da sombra do botão
    shadowOffset: { width: 0, height: 8 },// Deslocamento da sombra do botão
    shadowRadius: 7,// Raio da sombra do botão
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Texto do botão AJUDA
  helpButtonText: {
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
    //lineHeight: 40,
  },
});

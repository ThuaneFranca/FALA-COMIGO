import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const lugaresStyles = StyleSheet.create({
  // Container do ScrollView
  container: {
    backgroundColor: 'rgba(166, 211, 242, 1)',
    minHeight: height,
    paddingTop: 50, // Espaçamento superior
    paddingBottom: 40, // Espaçamento inferior
    alignItems: 'center',
  },

  // Fundo arredondado do título
  titleBackground: {
    width: 229,
    height: 46,
    backgroundColor: '#6ACBFF',
    borderRadius: 82,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 0,
   //borderWidth: 1,
    borderColor: '#3700DD',
  },

  // Texto do título
  title: {
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Grid responsiva
  grid: { // Estilo do grid para organizar os cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30, // Espaçamento acima do grid
    gap: 20, // Espaçamento entre os cards
  },

  // Card padrão
  card: { // Estilo de cada card
    width: 165,
    height: 175,
    backgroundColor: 'rgba(65, 192, 169, 1)',
    borderRadius: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    
  },

  // Imagem do card
  cardImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  // Texto do card
  cardText: {
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Botão AJUDA (mesmo estilo da tela Emoções)
  helpButton: {
    marginTop: 30,
    width: 118,
    height: 40,
    backgroundColor: 'rgba(106, 203, 255, 1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(55, 0, 221, 1)',
    shadowColor: 'rgba(0, 2, 98, 1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  // Texto do botão AJUDA
  helpButtonText: {
    fontSize: 22,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
    lineHeight: 40,
  },
});

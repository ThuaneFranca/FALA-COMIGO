import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const alimentosStyles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(166, 211, 242, 1)', // fundo azul
    minHeight: height,            // ocupa altura total da tela
    paddingTop: 80, // espaçamento superior do titulo
    paddingBottom: 40,
    alignItems: 'center',
  },

  titleBackground: { // Fundo azul do título
    width: 229, // largura do fundo do título
    height: 50,// altura do fundo do título
    backgroundColor: 'rgba(106, 203, 255, 1)', // cor de fundo azul
    borderRadius: 82,
    alignItems: 'center', // centraliza o conteúdo
    justifyContent: 'center',
    marginBottom: 20,// espaçamento abaixo do título
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 7 },
    shadowRadius: 0,
    //borderWidth: 1,
    borderColor: 'rgba(55, 0, 221, 1)',
  },

  title: { // Texto do título
    fontSize: 35,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
  },

  grid: {// Grid para os cards
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 7,
  },

  card: { // Estilo dos cards
    width: 165, // largura do card
    height: 175, // altura do card
    backgroundColor: 'rgba(148, 110, 255, 1)',
    borderRadius: 50,
    marginVertical: 30, // espaçamento vertical entre os cards
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,  // sombra no Android
    shadowColor: '#000', // sombra iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  cardImage: { // Imagem dentro do card
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  cardText: { // Texto dentro do card
    fontSize: 32,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
  },

  helpButton: { // Botão de ajuda
    marginTop: 20,
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

  helpButtonText: { // Texto do botão de ajuda
    fontSize: 29,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
    lineHeight: 40,
  },
});

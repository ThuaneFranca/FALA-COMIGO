import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window'); // Altura da tela

export const aprenderStyles = StyleSheet.create({
  // Container do ScrollView
  container: {
    backgroundColor: 'rgba(166, 211, 242, 1)',
    minHeight: height,
    paddingTop: 70, // Espaçamento superior
    paddingBottom:30, // Espaçamento inferior
    alignItems: 'center',
  },

  // Fundo arredondado do título
  titleBackground: {
    width: 229,
    height: 46,
    backgroundColor: 'rgba(106, 203, 255, 1)',
    borderRadius: 82,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 0,
    //borderWidth: 1,
    borderColor: 'rgba(55, 0, 221, 1)',
  },

  // Texto do título
  title: {
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Grid responsiva
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },

  // Card padrão
  card: {
    width: 165,
    height: 175,
    backgroundColor: 'rgba(234, 247, 181, 1)',
    borderRadius: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  // Imagem dentro do card
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
    fontSize: 29,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
    lineHeight: 40,
  },
});

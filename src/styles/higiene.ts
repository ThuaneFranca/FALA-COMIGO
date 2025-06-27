import { StyleSheet } from 'react-native';

export default StyleSheet.create({ // Estilos para a tela de Higiene
  // Container principal da tela
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70, // Espaçamento superior
    paddingBottom: 30, // Espaçamento inferior
    backgroundColor: '#A6D3F2',
  },
  titleBackground: { // Fundo azul arredondado atrás do título
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
  title: { // Texto do título
    fontSize:30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
  },
  grid: { // Grid para organizar os cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 90,
    gap: 20,
  },
  card: { // Card individual
    width: 165,
    height: 175,
    backgroundColor: '#946EFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  icon: { // Ícone dentro do card
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  cardText: { // Texto dentro do card
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },
  helpButton: { // Botão de ajuda
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
  helpText: {
    fontSize: 22,
    fontFamily: 'deliusUnicase-Regular',
    color: '#000',
  },
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6D3F2',
    alignItems: 'center',
    paddingTop: 70,
  },
  titleBackground: {
  width: 229,
  height: 46,
  backgroundColor: '#6ACBFF',
  borderRadius: 82,

  // Centraliza o conteúdo dentro da View
  alignItems: 'center',
  justifyContent: 'center',

  marginBottom: 60,
},

title: { // Estilo do título
  fontSize: 40,
  fontFamily: 'Just Another Hand',
  color: '#000',
  textAlign: 'center',  // centraliza texto
},




  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 30,
  },
  card: { // Card individual
    width: 150,
    height: 170,
    backgroundColor: '#BD9DFA',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  icon: { // Ícone dentro do card
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardText: { // Texto dentro doS cardS
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Just Another Hand',
    
    color: '#000',
  },
  helpButton: { // Botão AJUDA
    marginTop: 20,
    backgroundColor: '#6ACBFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 12,
  },
  helpText: { // Texto dentro do botão AJUDA
    fontSize: 25,
    color: '#000',
    fontFamily: 'Just Another Hand',
  },
});

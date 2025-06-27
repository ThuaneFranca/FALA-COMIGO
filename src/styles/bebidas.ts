import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#A6D3F2',
  },
  headerBox: { // Caixa azul arredondada atrás do título
    width: 229,
    height: 46,
    backgroundColor: '#6ACBFF',
    borderRadius: 82,
    //borderWidth: 1,
    borderColor: '#3700DD',
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height:8 },
    shadowRadius: 0,
  },
  title: { // Texto do título'
    marginTop: -40,
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
  },
  grid: { // Grid para organizar os cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    gap: 20,
  },
  card: { // Card individual
    width: 165,
    height: 175,
    backgroundColor: '#946EFF',
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  image: { // Ícone dentro do card
    width: 70,
    height: 70,
    marginBottom: 10,
  },

  label: { // Texto dentro do card
    fontSize: 17,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },

  helpButton: { // Botão de ajuda
    marginTop: 30,
    width: 200,
    height: 50,
    backgroundColor: '#6ACBFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3700DD',
    shadowColor: 'rgba(0, 2, 98, 1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpText: { // Texto dentro do botão de ajuda
    fontSize: 22,
    fontFamily: 'Just Another Hand',
    color: '#000',
  },
});

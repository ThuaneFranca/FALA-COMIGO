import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#A6D3F2',
    paddingTop: 70,
    paddingBottom: 100, 
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  
  titulo: { //titulo
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    textAlign: 'center',
    marginBottom: 50,
    backgroundColor: '#6ACBFF', 
    borderColor: '#3700DD', // borda azul escura
    shadowColor: 'rgba(0, 2, 98, 0.25)',       // sombra igual
    shadowOffset: { width: 4, height: 8 }, // sombra azul
    shadowRadius: 0,
    borderRadius: 82,
    width: 229,
    height: 46,

  },
  grid: { 
    flexDirection: 'row', // linha
    flexWrap: 'wrap', // quebra de linha
    justifyContent: 'space-around', // espaçamento entre os cards
    width: '100%', // ocupa toda a largura
  },
  item: { //card
    width: 165, 
    height: 175,
    backgroundColor: '#946EFF',
    borderRadius: 50,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width:70,
    height:70,
    marginBottom: 10,
  },
  
  legenda: { 
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },
  botaoAjuda: {
    marginTop: 20,
    width: 118,
    height: 40,
    backgroundColor: 'rgba(106, 203, 255, 1)', // azul claro
    borderRadius: 12,
    borderWidth: 1,
    //borderColor: 'rgba(55, 0, 221, 1)',        // borda azul escura
    //shadowColor: 'rgba(0, 2, 98, 1)',           // sombra azul
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textoAjuda: {
     fontSize: 29,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
    lineHeight: 40,
    
  },

});

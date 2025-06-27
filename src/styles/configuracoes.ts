// styles/configuracoes.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({ // Estilos para a tela de Configurações
  // Container principal da tela
  container: {
    flex: 1,
    backgroundColor: '#A6D3F2',
    padding: 20,
  },
  titulo: { // Título da tela
    fontFamily: 'Just Another Hand',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  caixa: {
    backgroundColor: '#6ACBFF',
    borderColor: '#3700DD',
    borderWidth: 1,
    borderRadius: 21,
    padding: 15,
    marginBottom: 15,
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 7 },
  },
  texto: {
    fontFamily: 'Just Another Hand',
    fontSize: 23,
    textAlign: 'center',
    color: '#000',
    marginTop: 10,
  },
  icone: {
    width: 45,
    height: 45,
    alignSelf: 'center',
  },
  label: {
    fontFamily: 'Just Another Hand',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    color: '#3A3A3A',
  },
  input: {
    height: 30,
    backgroundColor: '#BEE8FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3700DD',
    marginBottom: 10,
  },
  areaMensagem: {
    height: 100,
    backgroundColor: '#BEE8FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3700DD',
    marginBottom: 10,
  },
  botaoAjuda: {
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
    borderColor: '#3118F2',
    borderWidth: 1,
    borderRadius: 35,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textoAjuda: {
    fontFamily: 'Hammersmith One',
    fontSize: 22,
    color: '#584CFF',
  },
  scrollContainer: {
  flexGrow: 1,
  paddingBottom: 20,
},

});

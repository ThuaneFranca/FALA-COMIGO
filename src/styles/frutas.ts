import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#A6D3F2',
    paddingTop: 60,
    paddingBottom: 100,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontFamily: 'Just Another Hand',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '47%',
    backgroundColor: '#946EFF',
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  legenda: {
    fontSize: 28,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
  },
  botaoAjuda: {
    marginTop: 20,
    backgroundColor: '#6ACBFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textoAjuda: {
    fontSize: 28,
    fontFamily: 'Just Another Hand',
    color: '#000',
  },
  voltar: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
  },
  iconeVoltar: {
    width: 40,
    height: 40,
  },
});

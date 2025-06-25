// styles/comidas.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#A6D3F2',
    alignItems: 'center',
    paddingVertical: 40,
    paddingBottom: 80,
  },
  titulo: {
    fontSize: 40,
    fontFamily: 'Just Another Hand',
    color: '#000',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  item: {
    width: 140,
    height: 140,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#946EFF',
    borderRadius: 50,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 5,
    fontSize: 28,
    fontFamily: 'Just Another Hand',
    color: '#000',
  },
  ajudaButton: {
    marginTop: 30,
    backgroundColor: '#6ACBFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  ajudaTexto: {
    fontSize: 30,
    fontFamily: 'Just Another Hand',
    color: '#000',
  },
});

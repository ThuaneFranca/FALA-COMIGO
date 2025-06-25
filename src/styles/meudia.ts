import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 80,
    backgroundColor: '#A6D3F2',
    alignItems: 'center',
  },
  titleBackground: {
    backgroundColor: '#6ACBFF',
    borderRadius: 82,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20, // se não funcionar em sua versão do RN, use margin
  },
  card: {
    width: 165,
    height: 175,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  cardImage: {
    width: 90,
    height: 90,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 30,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
  },
});

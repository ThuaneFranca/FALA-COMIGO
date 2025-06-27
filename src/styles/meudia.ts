import { StyleSheet } from 'react-native';

// Estilos para a tela de Meudia
// Esta tela exibe uma grade de cards com 
// imagens e textos, além de um título principal

export const styles = StyleSheet.create({ // Estilos para a tela de Meudia
  container: { // Container principal da tela
    paddingTop: 50, // Espaçamento superior
    paddingBottom: 80, // Espaçamento inferior
    backgroundColor: '#A6D3F2',
    alignItems: 'center',
  },
  titleBackground: { // Fundo azul arredondado atrás do título
    backgroundColor: '#6ACBFF', // Cor de fundo azul
    borderRadius: 82, // Bordas arredondadas
    paddingHorizontal: 30, // Espaçamento horizontal
    paddingVertical: 5, // Espaçamento vertical
    marginBottom: 50, // Espaçamento inferior
    borderColor: '#3700DD', // Cor da borda
    shadowColor: 'rgba(0, 2, 98, 0.25)', // Cor da sombra
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { // Estilo do título principal
    fontSize: 35,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },
  grid: { // Grid para organizar os cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20, // se não funcionar em sua versão do RN, use margin
  },
  card: { // Estilo do card individual
    width: 165,
    height: 175,
    borderRadius: 50,   // Bordas arredondadas
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  cardImage: { // Imagem dentro do card
    width: 90,
    height: 90,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  cardText: { // Texto dentro do card
    fontSize: 16,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },
});

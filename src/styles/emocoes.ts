import { StyleSheet } from 'react-native';

export const emocoesStyles = StyleSheet.create({
  // Container do ScrollView (contentContainerStyle)
  container: {
    backgroundColor: 'rgba(166, 211, 242, 1)', // mesma cor da Higiene
    paddingTop: 50,    // espaço do topo para o título
    paddingBottom: 40, // espaço para o botão ajuda ficar visível
    alignItems: 'center',
  },

  // Fundo azul arredondado atrás do título
  titleBackground: {
    width: 229,
    height: 46,
    backgroundColor: '#6ACBFF',  // azul igual Higiene
    borderRadius: 82,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:50,
    borderColor: '#3700DD', // borda azul escura
    shadowColor: 'rgba(0, 2, 98, 0.25)',       // sombra igual
    shadowOffset: { width: 4, height: 8 }, // sombra azul
    shadowRadius: 0,
    //borderWidth: 1,
  },

  // Texto do título
  title: {
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Grid para organizar os cards em várias linhas
  grid: {
    flexDirection: 'row', // linha
    flexWrap: 'wrap', // quebra de linha
    justifyContent: 'space-around', // espaçamento entre os cards
    width: '100%', // ocupa toda a largura
  },

  // Card individual, tamanho e estilo igual Higiene
  card: {
    width: 165,
    height: 175,
    backgroundColor: 'rgba(255, 168, 206, 1)',  // rosa clarinho igual Higiene
    borderRadius: 50,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Imagem dentro do card
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  // Nome da categoria no card
  cardText: {
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },

  // Botão ajuda igual ao da tela Higiene
  helpButton: {
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

  // Texto do botão ajuda
  helpButtonText: {
    fontSize: 29,
    fontFamily: 'Just Another Hand',
    color: '#000',
    textAlign: 'center',
    lineHeight: 40,
  },
});

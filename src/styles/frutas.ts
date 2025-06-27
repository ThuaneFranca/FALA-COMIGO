import { StyleSheet } from 'react-native';

export default StyleSheet.create({ // Estilos para a tela de Frutas
  // Container principal da tela
  container: {
    backgroundColor: '#A6D3F2',
    paddingTop: 60, // Espaçamento superior
    paddingBottom: 30, // Espaçamento inferior
    paddingHorizontal: 20, // Espaçamento lateral
    alignItems: 'center',
    
  },
  titulo: { // Título da tela
    fontSize:30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    backgroundColor: '#6ACBFF',
    borderRadius: 82,
    borderColor: '#3700DD',
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 8 },
    shadowRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150, // Largura do título
    height: 46, // Altura do título
    textAlign: 'center', // Centraliza o texto
  },

  grid: { // Grid para organizar os itens
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
    gap: 20,
  },
  item: { // Estilo de cada item no grid
    width: 165,
    height: 175,
    backgroundColor: '#946EFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  imagem: { // Ícone dentro do item
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  legenda: { // Texto dentro do item
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
  },
  botaoAjuda: { // Botão de ajuda
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
  textoAjuda: {
    fontSize: 22,
    fontFamily: 'deliusUnicase-Regular',
    color: '#000',
  },
 
  iconeVoltar: {
    width: 40,
    height: 40,
  },
});

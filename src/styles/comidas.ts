// styles/comidas.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({ // Estilos para a tela de Comidas
  container: {
    backgroundColor: '#A6D3F2',
    alignItems: 'center',
    paddingVertical: 40,
    paddingBottom: 80,
  },
  

  titulo: { // Título da tela
    fontSize: 30,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    marginBottom:50,
    borderColor: '#3700DD',
    shadowColor: 'rgba(0, 2, 98, 0.25)',
    shadowOffset: { width: 4, height: 8 },
    width: 229,
    height: 46,
    backgroundColor: '#6ACBFF',
    borderRadius: 82,
    textAlign: 'center', // Centraliza o texto
    
    
  },
  
  grid: { // Grid para organizar os cards
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  item: { // Estilo do card individual
    width: 165,
    height: 175,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#946EFF',
    borderRadius: 50,
    padding: 10,
    
  },
  image: { // Imagem dentro do card
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  label: { // Texto dentro do card
    fontSize: 20,
    fontFamily: 'DeliusUnicase-Regular',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  ajudaButton: {
    // Botão de ajuda
    marginTop: 30, // Espaçamento acima do botão
    width: 200, // Largura do botão
    height: 50, // Altura do botão
    backgroundColor: '#6ACBFF', // Cor de fundo do botão
    borderRadius: 12, // Borda arredondada do botão
    borderWidth: 1, // Borda do botão
    borderColor: '#3700DD',
    shadowColor: 'rgba(0, 2, 98, 1)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ajudaTexto: {
    fontSize: 30,
    fontFamily: 'Just Another Hand',
    color: '#000',
  },
});

import { useRouter } from 'expo-router'; // Import useRouter from expo-router
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() { // HomeScreen component
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}> 
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>FALA COMIGO</Text>

        <Image // Display the logo image
          source={require('../assets/LOGO/LOGO TRANSP.png')}
          style={styles.logo}
        />

        <TouchableOpacity // Button to navigate to "Meu Dia" screen
          style={styles.button}
          onPress={() => router.push('/meu-dia')}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ // Styles for the HomeScreen component
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#A6D3F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: { // Title text style
    fontFamily: 'Architects Daughter',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    color: '#2B2926',
  },
  logo: { // Logo image style
    width: width * 1.2,
    height: width * 1.3,
    marginBottom: -60,
    resizeMode: 'contain',
  },
  button: { // Button style
    backgroundColor: '#6ACAFF',
    borderRadius: 82,
    paddingVertical: 20,
    paddingHorizontal: 38,
    elevation: 8,
  },
  buttonText: { // Button text style
    color: '#031246',
    fontSize: 30,
    fontFamily: 'Racing Sans One',
  },
});

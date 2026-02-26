import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Bem Vindo</Text>
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9bafd9',
  },
  titulo: {
    fontSize: '35px',
    fontFamily: 'Georgia',
    color: "#ebf4f5",
    marginBottom: '50px'
  },
  input: {
    backgroundColor: '#ebf4f5',
    textAlign: 'center',
    color: '#000',
    width: '80%',
    borderRadius: '10px',
    height: '50px',
    fontFamily: 'Georgia',
    margin: 5,
  },
  botao: {
    width: '80%',
    height: 50,
    backgroundColor: '#103783',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  botaoTexto: {
    fontFamily: 'Georgia',
    color: "#fff",
  }
})

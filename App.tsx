import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Título</Text>
      <TextInput placeholder="Caixa de texto" style={styles.input} />
      <Button title="Salvar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: '#F54927',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  input: {
    backgroundColor: '#696969',
    textAlign: 'center',
    color: '#fff',
    width: '80%',
    borderRadius: '4',
    borderColor: '#fff',
    height: '20%',
    margin: '10%',
  },
});

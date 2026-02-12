import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Rede Social</Text>
      <Text style={styles.postagem}>Postagem</Text>
      <TextInput placeholder="Poste seu pensamento!" style={styles.input} />
      <Button title="Postar"/>
      <Button title="Deletar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 50,
    marginBottom: '25%',
    color: '#020414',
  },
  postagem: {
    fontSize: 30,
    marginBottom: '5%',
    color: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#939FF4',
  },
  input: {
    backgroundColor: '#696969',
    textAlign: 'center',
    color: '#fff',
    width: '80%',
    borderRadius: '4',
    borderColor: '#fff',
    height: '20%',
  },
});

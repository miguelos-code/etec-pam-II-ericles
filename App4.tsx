import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [menssagem, setMenssagem] = useState('');
  const [tela, setTela] = useState('');

  const [alunos, setAlunos] = useState([]);
  const [nome, setNomes] = useState('');
  const [idade, setIdades] = useState('');
  const [curso, setCursos] = useState('');

  function validarLogin() {
    if (login === 'admin' && senha === '1234') {
      setTela('mudar');
    } else {
      setMenssagem('Login ou senha incorretos!');
    }
  }

  function voltarTela() {
    setTela('');
    setLogin('');
    setSenha('');
    setMenssagem('');
  }

  function cadastrarAluno() {
    const novoAluno = {
      nome,
      idade,
      curso,
    };

    setAlunos([...alunos, novoAluno]);

    setNomes('');
    setIdades('');
    setCursos('');
  }

  if (tela === 'mudar') {
    return (
      <View style={style.container}>
        <Text style={style.titulo}>Cadastro novo aluno</Text>
        <TextInput
          style={style.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNomes}></TextInput>
        <TextInput
          style={style.input}
          placeholder="Digite sua idade"
          value={idade}
          keyboardType = 'numeric'
          onChangeText={setIdades}></TextInput>
        <TextInput
          style={style.input}
          placeholder="Digite seu curso"
          value={curso}
          onChangeText={setCursos}></TextInput>

        <TouchableOpacity style={style.button} onPress={cadastrarAluno}>
          <Text style={{ color: 'white' }}>Cadastrar</Text>
        </TouchableOpacity>

        {alunos.map((alunos, index) => (
          <View key={index}>
            <Text style={style.titulo}> Novo aluno cadastrado! </Text>
            <Text style={style.texto}> Nome: {alunos.nome} </Text>
            <Text style={style.texto}> Idade: {alunos.idade} </Text>
            <Text style={style.texto}> Curso: {alunos.curso} </Text>
          
          </View>
        ))}

      </View>
    );
  } else {
    return (
      <View style={style.container}>
        <Text style={style.titulo}> Tela de Login </Text>
        <Text style={style.label}>Login: </Text>
        <TextInput
          style={style.input}
          placeholder="Digite seu login"
          value={login}
          onChangeText={setLogin}></TextInput>
        <Text style={style.label}>Senha: </Text>
        <TextInput
          style={style.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}></TextInput>
        <TouchableOpacity style={style.button} onPress={validarLogin}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <Text style={style.label}>{menssagem}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#123456',
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    color: 'pink',
    margin: 15,
  },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    margin: 8,
  },
  label: {
    color: 'pink',
  },
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    backgroundColor: '#123',
    padding: 15,
    margin: 15,
    color: 'white',
  },
  texto: {
    fontSize: 18,
    color: 'pink',
    margin: 10,
  }
});

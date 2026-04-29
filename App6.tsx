import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [escolaridade, setEscolaridade] = useState('');

  const [abrirDropdown, setAbrirDropdown] = useState(false);

  const [lista, setLista] = useState([]);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const mascaraData = (text) => {
    let cleaned = text.replace(/\D/g, '');
    cleaned = cleaned.replace(/(\d{2})(\d)/, '$1/$2');
    cleaned = cleaned.replace(/(\d{2})(\d)/, '$1/$2');
    return cleaned.slice(0, 10);
  };

  const mascaraCPF = (text) => {
    let cleaned = text.replace(/\D/g, '');
    cleaned = cleaned.replace(/(\d{3})(\d)/, '$1.$2');
    cleaned = cleaned.replace(/(\d{3})(\d)/, '$1.$2');
    cleaned = cleaned.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cleaned.slice(0, 14);
  };

  const mascaraRG = (text) => {
    let cleaned = text.replace(/\D/g, '');
    cleaned = cleaned.replace(/(\d{2})(\d)/, '$1.$2');
    cleaned = cleaned.replace(/(\d{3})(\d)/, '$1.$2');
    cleaned = cleaned.replace(/(\d{3})(\d)/, '$1-$2');
    return cleaned.slice(0, 12);
  };

  const mascaraTelefone = (text) => {
    let cleaned = text.replace(/\D/g, '');
    cleaned = cleaned.replace(/(\d{2})(\d)/, '($1) $2');
    cleaned = cleaned.replace(/(\d{4})(\d)/, '$1-$2');
    return cleaned.slice(0, 14);
  };

  const mascaraCelular = (text) => {
    let cleaned = text.replace(/\D/g, '');
    cleaned = cleaned.replace(/(\d{2})(\d)/, '($1) $2');
    cleaned = cleaned.replace(/(\d{5})(\d)/, '$1-$2');
    return cleaned.slice(0, 15);
  };

  const opcoes = ['Fundamental', 'Médio', 'Técnico', 'Superior'];

  const limparCampos = () => {
    setNome('');
    setDataNascimento('');
    setRg('');
    setCpf('');
    setEndereco('');
    setTelefone('');
    setCelular('');
    setEscolaridade('');
  };

  const cadastrar = () => {
    const novaPessoa = {
      nome,
      dataNascimento,
      rg,
      cpf,
      endereco,
      telefone,
      celular,
      escolaridade,
    };

    setLista([...lista, novaPessoa]);
    limparCampos();
  };

  const deletar = (index) => {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  };

  const editar = (index) => {
    const pessoa = lista[index];

    setNome(pessoa.nome);
    setDataNascimento(pessoa.dataNascimento);
    setRg(pessoa.rg);
    setCpf(pessoa.cpf);
    setEndereco(pessoa.endereco);
    setTelefone(pessoa.telefone);
    setCelular(pessoa.celular);
    setEscolaridade(pessoa.escolaridade);

    setIndiceEdicao(index);
  };

  const atualizar = () => {
    const novaLista = [...lista];

    novaLista[indiceEdicao] = {
      nome,
      dataNascimento,
      rg,
      cpf,
      endereco,
      telefone,
      celular,
      escolaridade,
    };

    setLista(novaLista);
    setIndiceEdicao(null);
    limparCampos();
  };

  return (
    <View style={style.container}>
      <Text style={style.titulo}>Tela de Cadastro</Text>

      <View style={style.linha}>
        <View style={style.coluna}>
          <Text style={style.label}>Nome</Text>
          <TextInput style={style.input} value={nome} onChangeText={setNome} />

          <Text style={style.label}>Data de Nascimento</Text>
          <TextInput
            style={style.input}
            value={dataNascimento}
            onChangeText={(t) => setDataNascimento(mascaraData(t))}
            keyboardType="numeric"
          />

          <Text style={style.label}>RG</Text>
          <TextInput
            style={style.input}
            value={rg}
            onChangeText={(t) => setRg(mascaraRG(t))}
            keyboardType="numeric"
          />

          <Text style={style.label}>CPF</Text>
          <TextInput
            style={style.input}
            value={cpf}
            onChangeText={(t) => setCpf(mascaraCPF(t))}
            keyboardType="numeric"
          />
        </View>

        <View style={style.coluna}>
          <Text style={style.label}>Endereço</Text>
          <TextInput
            style={style.input}
            value={endereco}
            onChangeText={setEndereco}
          />

          <Text style={style.label}>Telefone</Text>
          <TextInput
            style={style.input}
            value={telefone}
            onChangeText={(t) => setTelefone(mascaraTelefone(t))}
            keyboardType="numeric"
          />

          <Text style={style.label}>Celular</Text>
          <TextInput
            style={style.input}
            value={celular}
            onChangeText={(t) => setCelular(mascaraCelular(t))}
            keyboardType="numeric"
          />

          <Text style={style.label}>Escolaridade</Text>

          <TouchableOpacity
            style={style.dropdown}
            onPress={() => setAbrirDropdown(!abrirDropdown)}>
            <Text style={{ color: escolaridade ? 'white' : 'gray' }}>
              {escolaridade || 'Selecione...'}
            </Text>
          </TouchableOpacity>

          {abrirDropdown && (
            <View style={style.dropdownLista}>
              {opcoes.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={style.dropdownItem}
                  onPress={() => {
                    setEscolaridade(item);
                    setAbrirDropdown(false);
                  }}>
                  <Text style={{ color: 'white' }}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={indiceEdicao !== null ? atualizar : cadastrar}>
        <Text style={{ color: 'white' }}>
          {indiceEdicao !== null ? 'Atualizar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>

      {lista.map((item, index) => (
        <View key={index} style={{ marginTop: 10 }}>
          <Text style={{ color: 'white' }}>{item.nome}</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => editar(index)}>
              <Text style={{ color: 'yellow', marginRight: 10 }}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deletar(index)}>
              <Text style={{ color: 'red' }}>Deletar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22223b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  linha: {
    flexDirection: 'row',
  },
  coluna: {
    margin: 5,
  },
  titulo: {
    fontSize: 24,
    color: '#f9dbbd',
    marginBottom: 20,
  },
  label: {
    color: '#f9dbbd',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 8,
    marginTop: 5,
    height: 40,
    width: 250,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginTop: 5,
    width: 250,
  },
  dropdownLista: {
    borderWidth: 1,
    borderColor: 'white',
    width: 250,
    backgroundColor: '#333',
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
  },
});

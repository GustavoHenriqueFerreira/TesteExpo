/* import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import axios from 'axios';

export default class Ponto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idBicicletario: 1,
      CEP: "",
      bairro: "",
      cidade: "",
      horarioAberto: "",
      horarioFechado: "",
      nome: "",
      numero: 0,
      rua: "",
      quantidadeVaga: 0,
      vagaDisponivel: 0,
    };
  }

  buscarInfoPonto = async () => {
    try {
      // faz a importação do pacote axios

      // define a função para chamada das requisições
      const api = axios.create({
        // define a URL base das requisições
        baseURL: 'https://623afa8d2e056d1037eac65b.mockapi.io',
      });

      //const token = await AsyncStorage.getItem('userToken');
      const resposta = await api.get('/Bicicletarios/1');
      /*{
           headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      if (resposta.status === 200) {
        //const dadosDaApi = resposta.data;
        this.setState({
          CEP: resposta.data.CEP,
          bairro: resposta.data.bairro,
          cidade: resposta.data.cidade,
          nome: resposta.data.nome,
          numero: resposta.data.numero,
          rua: resposta.data.rua,
          horarioAberto: resposta.data.horarioAberto,
          horarioFechado: resposta.data.horarioFechado,
          quantidadeVaga: resposta.data.idVaga[0].quantidadeVaga,
          vagaDisponivel: resposta.data.idVaga[0].vagaDisponivel,
        });
        //console.warn(this.state.idVaga);
      }
    } catch (error) {
      //console.warn(error);
    }
  };

  componentDidMount() {
    this.buscarInfoPonto();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          <ImageBackground style={styles.imgPonto} source={require('./assets/mapa.png')}>
            <TouchableOpacity style={styles.mainBtnVoltar} onPress={this.goBack}>
              <Image style={styles.mainBtnVoltar} source={require('./assets/Icone_voltar.png')} />
            </TouchableOpacity>
            <View style={styles.alinhamentoRetangulo}>
              <View style={styles.retanguloBicicletario} />
            </View>
          </ImageBackground>
          <View style={styles.mainBody}>
            <View style={styles.espacoTitulo}>
              <Text style={[styles.tituloBicicletario, styles.sombra]}>{this.state.nome}</Text>
            </View>
            <View style={styles.infoBicicletario}>
              <View>
                <Text style={styles.tituloInfo}>Endereço:</Text>
                <Text style={styles.textoInfo}>{this.state.rua}, {this.state.numero} - {this.state.bairro}, {this.state.cidade}, {this.state.CEP}</Text>
              </View>
              <View>
                <Text style={styles.tituloInfo}>Áreas atendidas:</Text>
                <Text style={styles.textoInfo}>{this.state.cidade}</Text>
              </View>
              <View>
                <Text style={styles.tituloInfo}>Horas:</Text>
                <Text style={styles.textoInfo}>Aberto: {this.state.horarioAberto} ⋅ Fecha às {this.state.horarioFechado}</Text>
              </View>
              <View>
                <Text style={styles.tituloInfo}>Vagas:</Text>
                <Text style={styles.textoInfo}>Disponiveis = {this.state.vagaDisponivel}</Text>
                <Text style={styles.textoInfo}>Totais = {this.state.quantidadeVaga}</Text>
              </View>
              <View style={styles.btnPosicionamento}>
                <TouchableOpacity style={styles.btnPonto} onPress={this.navegarVaga}>
                  <Text style={styles.cardPontosText}>Estou no ponto</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#CECED7',
  },

  mainBtnVoltar: {
    width: 20,
    height: 20,
    marginLeft: 13,
    marginTop: 7
  },

  imgPonto: {
    height: 270,
  },

  mainBody: {
    flex: 1,
    justifyContent: 'space-between',
  },

  espacoTitulo: {
    height: 103,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  tituloBicicletario: {
    //fontFamily: '',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },

  infoBicicletario: {
    paddingLeft: 38,
    paddingRight: 38,
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    paddingTop: 10,
  },

  tituloInfo: {
    //fontFamily: '',
    fontSize: 25,
    color: '#000',
  },

  textoInfo: {
    //fontFamily: '',
    fontSize: 18,
    color: '#000',
  },

  btnPosicionamento: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnPonto: {
    backgroundColor: '#F3BC2C',
    width: 157,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardPontosText: {
    //fontFamily: '',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
}); */


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      base64: '',
      MensagemErro: '',
    };
  }

  /* realizarLogin = () => {
    this.props.navigation.navigate('Main');
  }

  realizarCadastro = () => {
    this.props.navigation.navigate('Ponto');
  } */

  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    //console.warn(this.state.Email + ' ' + this.state.Senha);
    const api = axios.create({
      // define a URL base das requisições
      baseURL: 'http://192.168.15.11:5000/api',
    });

    const resposta = await api.post('/Login', {
      Email: this.state.Email, //ricardo.lemos@spmedicalgroup.com.br
      Senha: this.state.Senha, //321
    })
      .catch(MensagemErro => {
        this.setState({ MensagemErro: 'E-mail ou senha incorretos!' })
      });

    //mostrar no swagger para montar.
    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    const valorToken = await AsyncStorage.getItem('userToken');
    /* console.warn(jwtDecode(valorToken).role); */

    //redireciona para a main específica do usuário dependendo da role através do jwtDecote
    if (resposta.status) {
      this.props.navigation.navigate('Main');
    }

  };

  LimparCampos = () => {
    this.setState({ Email: '', Senha: '', MensagemErro: '' })
  };

  componentDidMount() {
    this.LimparCampos()
  };

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainDiv}>

          <View style={styles.mainImagemSpace}>
            <Image source={require('./assets/icon.png')} style={styles.mainImagem} />
          </View>
          <View style={styles.mainFormSpace}>
            <TextInput
              style={styles.mainInput}
              placeholder='Endereço de E-mail'
              placeholderTextColor='#000000'
              keyboardType="email-address"
              // EVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
              onChangeText={Email => this.setState({ Email })}
            />

            <TextInput
              style={styles.mainInput}
              placeholder='Senha'
              placeholderTextColor='#000000'
              keyboardType="default" //para default nao obrigatorio.
              secureTextEntry={true} //proteje a senha.
              // EVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
              passwordRules
              onChangeText={Senha => this.setState({ Senha })}
            />

            <TouchableOpacity style={styles.mainBtn} onPress={this.realizarLogin}>
              <Text style={styles.mainBtnTexto}>Logar</Text>
            </TouchableOpacity>

            <Text>{this.state.MensagemErro}</Text>
          </View>

          <View style={styles.mainTextoSpace}>

            <Text style={styles.mainTexto}>Esqueceu sua senha?</Text>
            <TouchableOpacity style={styles.mainBtnCadastro} onPress={this.realizarCadastro}>
              <Text style={styles.mainTexto}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },

  mainDiv: {
    flex: 0.9,
    backgroundColor: 'white',
    height: 517,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  mainImagemSpace: {
    width: 260,
    height: 166,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainImagem: {
    marginTop: 20,
    width: 132,
    height: 96,
  },

  mainFormSpace: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainInput: {
    width: 260,
    height: 60,
    backgroundColor: '#ffffff',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#F3BC2C',
    paddingLeft: 23,
  },

  mainBtn: {
    backgroundColor: '#F3BC2C',
    width: 157,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainBtnTexto: {
    //fontFamily: '',
    fontSize: 14,
    color: '#000000'
  },

  mainTextoSpace: {
    height: 91,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainTexto: {
    //fontFamily: '',
    fontSize: 14,
    color: '#000000',
    fontFamily: 'ABeeZee-Regular'
  },
});

export default Login;
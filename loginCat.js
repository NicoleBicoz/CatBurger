import React, { useState, useEffect, setState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, Touchable, ScrollView, Platform, SafeAreaView, TextInput } from 'react-native';
import logoCat from './assets/icon.png';
import conexion from './Conectividad/ConexionOracle'
import { createServer } from "miragejs"


        if (window.server) {
            server.shutdown()
        }

        window.server = createServer({
            routes() {
                this.get("/api/usuarios", () => {
                    return {
                        users: [
                            { id: 1, mail: "jaramillo.nicole@gmail.com", pass: 202030 },
                            { id: 2, mail: "lerolero@hotmail.com", pass: 2021 },
                            { id: 3, mail: "Dunkirk", pass: 2030 },
                        ],
                    }
                })
            },
        })

var conjuntoDatos = [
  {  id: 0, mail: "jaramillo.nicole@gmail.com", pass: 202030 },
  { id: 1, mail: "lerolero@hotmail.com", pass: 2021 },
  { id: 2, mail: "Dunkirk", pass: 2030 }]

var mailIngresado, passIngresada = ""
var existeCorreo = false
var validado = false

function validaDatos(usuario, pass){
  existeCorreo = false
  validado = false

  usuarito.map((id) => {
    if(id.mail == usuario){
      existeCorreo = true
      if(id.pass == pass){
        validado = true
      }
    }
  })

  return validado
}

class loginCat extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      usuarito: [],
      url: "/api/usuarios"
    }
  }

  componentDidMount(){
    console.log("No carga")
    this.getUsuarios();
    
  }
  

  getUsuarios = () => {
    this.setState({loading: true})
    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {
      this.setState({
        usuarito : res.users,
        url: res.next,
        loading: false
      })
    })
  }


  validaDatos(usuario, pass){
    existeCorreo = false
    validado = false

  
    this.state.usuarito.map((id) => {
      if(id.mail == usuario){
        existeCorreo = true
        if(id.pass == pass){
          validado = true
        }
      }
    })
    return validado
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>¿Qué puedes hacer en CatBurger?</Text>
        <Text style={styles.textoExplicativo}>Una generosa donación a un gatito hambriento que sólo quiere comer hamburguesas.{"\n"}{"\n"}No lo juzgues.{"\n"}</Text>
  
        <TextInput
          style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
          placeholder='Ingresa tu correo'
          placeholderTextColor='grey'
          keyboardType='email-address'
          textContentType={'emailAddress'}
          ref='wena'
          maxLength={50}
          onChangeText={(value) => mailIngresado=value}
        />
  
        <TextInput
          style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
          placeholder='Ingresa tu secreta contraseña'
          placeholderTextColor='grey'
          keyboardType='number-pad'
          secureTextEntry={true}
          textContentType={'password'}
          maxLength={8}
          onChangeText={(value) => passIngresada=value}
        />
    
        <TouchableOpacity
          onPress={() => {
            if(this.state.loading){
              console.log("No carga")
            }

            var ejecuta = this.validaDatos(mailIngresado, passIngresada);
            if (ejecuta == true){
              this.props.navigation.navigate('Donaciones')
            } else if (ejecuta == false & existeCorreo == true) {
              console.log('Contraseña no válida')
              Alert.alert('Ups!','Contraseña no válida')
            } else {
              console.log('Usuario no registrado. Regístrate!')
              Alert.alert('Ups!','Usuario no registrado. Regístrate!',[
                {
                  text: 'Quiero Registrarme',
                  onPress: () => this.props.navigation.navigate('Registrate Esclavo')
                },{
                  text: 'Cancelar'
                }
              ])
            } 
          }}
          style={styles.botonCuenta}
        >
          <Text style={styles.textoBotonHome}>¡Entrar a donar!</Text>
        </TouchableOpacity>
  
        <Image
          source={logoCat}
          style={styles.image}
        />
      </View>
    );
  }
}

// ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 10
  },
  textoExplicativo: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
    paddingLeft: 5,
    paddingRight: 5
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 20,
    alignSelf: 'center'
  },
  botoncito: {
    backgroundColor: 'red',
    padding: 7,
    marginTop: 10
  },
  buttontext: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  botonCuenta: {
    backgroundColor: 'green',
    padding: 7,
    marginTop: 10
  },
  botonSinCuenta: {
    backgroundColor: 'red',
    padding: 7,
    marginTop: 10
  },
  textoBotonHome: {
    color: '#fff',
    fontSize: 15
  },
});

export default loginCat;
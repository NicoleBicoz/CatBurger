import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, Touchable, ScrollView, Platform, SafeAreaView, TextInput } from 'react-native';
import image from './assets/Gato-hamburguesa.jpg';
import logoCat from './assets/icon.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

class RegistroCats extends React.Component {
  render() {
    return (
        
        <View style={styles.container}>
          <Text style={styles.title}>¿Qué datos necesita CatBurger?</Text>
          <Text style={styles.textoExplicativo}>Necesito los datos que te pido en el siguiente formulario:{"\n"}{"\n"}</Text>
    
          <TextInput
            style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
            placeholder='Nombre completo'
            placeholderTextColor='grey'
            textContentType={'name'}
            maxLength={80}
          />
    
          <TextInput
            style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
            placeholder='Correo electrónico'
            placeholderTextColor='grey'
            keyboardType='email-address'
            textContentType={'emailAddress'}
            maxLength={50}
          />
    
          <View>
            <TextInput name='inputFecha' style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }} />
          </View>
          <TextInput
            style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
            placeholder='Ingresa clave numérica (máx. 8 dígitos)'
            placeholderTextColor='grey'
            keyboardType='number-pad'
            secureTextEntry={true}
            textContentType={'password'}
            maxLength={8}
          />
    
          <TextInput
            style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
            placeholder='Reingresa tu clave numérica'
            placeholderTextColor='grey'
            keyboardType='number-pad'
            secureTextEntry={true}
            textContentType={'password'}
            maxLength={8}
          />
    
    
    
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Donaciones')}
            style={styles.botonCuenta}
          >
            <Text style={styles.textoBotonHome}>¡Seré un nuevo esclavo!</Text>
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

function NuevaCuenta() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const cambiaFecha = (event, fechaSeleccionada) => {
      const currentDate = fechaSeleccionada || date;
      setDate(currentDate);
      return;
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
}

export default RegistroCats;
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logoCat from '../assets/icon.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class indexLibreriaCat extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Image
          /*source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200' }}*/
          source={logoCat}
          style={styles.image}
        />
        <Text style={styles.title}>Libreria Cat!</Text>
        <Text style={styles.textoExplicativo}>Hola esclavo! Como ya realizaste una donación tienes derecho a mirar nuestra librería.{"\n"}{"\n"}Te invitamos a echar un vistazo a nuestras editoriales, libros y descuentos!</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Crea/Edita Editoriales')}
          style={styles.botonCuenta}
        >
          <Text style={styles.textoBotonHome}>Editoriales</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('registroCat')}
          style={styles.botonSinCuenta}
        >
          <Text style={styles.textoBotonHome}>No tengo una cuenta, quiero registrarme</Text>
        </TouchableOpacity>
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

export default indexLibreriaCat;
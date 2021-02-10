import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logoCat from '../assets/icon.png';
import { TextInput } from 'react-native-gesture-handler';



class editoriales extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Image
          /*source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200' }}*/
          source={logoCat}
          style={styles.image}
        />
        <Text style={styles.title}>Crea o edita editoriales</Text>
        <Text style={styles.textoExplicativo}>Escoge una editorial si quieres editarla, o bien crea una nueva.{"\n"}{"\n"}</Text>
        
        <TextInput
            style={{ height: 50, width: 300, paddingLeft: 10, paddingRight: 10, borderColor: 'green', borderWidth: 1, color: 'white' }}
            placeholder='Nombre editorial'
            placeholderTextColor='grey'
            textContentType={'name'}
            maxLength={80}
            refs='nombreEditorial'
          />
        
        <TouchableOpacity
            onPress={() => alert('HOLA')}
            style={styles.botonCuenta}
          >
            <Text style={styles.textoBotonHome}>Ingresar/Actualizar editorial</Text>
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
    height: 100,
    width: 100,
    borderRadius: 50,
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

export default editoriales;
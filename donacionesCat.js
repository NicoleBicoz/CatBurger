import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity, Touchable, ScrollView, Platform, SafeAreaView, TextInput } from 'react-native';
import image from './assets/Gato-hamburguesa.jpg';
import logoCat from './assets/icon.png';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


var hamburguesas = [
    { label: 'Italiana', value: 0 },
    { label: 'Barros Luco', value: 1 },
    { label: 'Chacarera', value: 2 },
    { label: 'Brasileña', value: 3 },
    { label: 'Campesina', value: 4 },
    { label: 'Vegetariana', value: 5 },
    { label: 'Sola', value: 6 }
  ];
  
  var ingredientes = [
    { label: "palta, tomate, mayonesa" },
    { label: "queso derretido" },
    { label: "poroto verde, tomate, ají, mayonesa" },
    { label: "palta, queso derretido" },
    { label: "lechuga, choclo, tomate, mayonesa" },
    { label: "lechuga, tomate, palta, champiñones" },
    { label: "Sólo pan y carne" }
  ]
  
  var valor = 0;
  var idHamburguesa = 0;


class FriendsScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>Hola esclavo, quiero comer mi maldita hamburguesa!</Text>
            <Image
              /*source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200' }}*/
              source={image}
              style={styles.image}
            />
            <Text style={styles.textoExplicativo}>¡Qué gran día para donar!{"\n"}{"\n"}</Text>
            <Text style={styles.textoExplicativo}>Como te habrás dado cuenta, soy un gato que sólo quiere comer una hamburguesa. Bien sé que no está dentro de la dieta de los gatos, pero tampoco está en la tuya y comes igual, ¿es eso justicia?</Text>
            <Text style={styles.textoExplicativo}>Esta página tiene como objetivo mostrarte las distintas hamburguesas y los ingredientes que la conforman.{"\n"}{"\n"}</Text>
    
            <Text style={styles.textoExplicativo}>Es por eso que te invito a elegir una hamburguesa para que me la dones de inmediato:</Text>
    
            <View style={{ margin: 20 }}>
              <RadioForm
                radio_props={hamburguesas}
                initial={0}
                buttonColor={'green'}
                selectedButtonColor={'green'}
                labelStyle={{ fontSize: 15, color: 'white', margin: 10 }}
                onPress={(value) => { Alert.alert('Esta hamburguesa contiene', ingredientes[value].label); valor = hamburguesas[value].label; idHamburguesa = hamburguesas[value].value }}
              />
            </View>
    
            <TouchableOpacity
              onPress={() => {
                if (idHamburguesa == 5) {
                  Alert.alert('Ouch!', 'Crees que quiero comer una hamburguesa ' + valor + '? Amo la carne, elige otra')
                  return false;
                } else if (idHamburguesa == 6) {
                  Alert.alert('Oh! Amarrete!', 'Crees que quiero comer una hamburguesa ' + valor + '? Ponle más empeño')
                  return false;
                }
                  Alert.alert('', 'Me has donado una hamburguesa ' + valor + '. Te lo miaugradezco');
                  this.props.navigation.navigate('Librería CatBurger');
                
              }}
              style={styles.botoncito}
            >
              <Text style={styles.buttontext}>Donar hamburguesa</Text>
            </TouchableOpacity>
          </ScrollView>
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

export default FriendsScreen;
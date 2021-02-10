import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import indexCat from './index';
import login from './loginCat';
import donaciones from './donacionesCat';
import registro from './registroCat';
import indexLibreria from './libreriaCat/indexLibros';
import editoriales from './libreriaCat/editoriales';

const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="CatBurger"
            component={indexCat}
          />
          <Stack.Screen
            name="loginCat"
            component={login}
          />
          
          <Stack.Screen
            name="Donaciones"
            component={donaciones}
          />
          <Stack.Screen
            name="Registrate Esclavo"
            component={registro}
          />
          <Stack.Screen
            name="Librería CatBurger"
            component={indexLibreria}
          />
          <Stack.Screen
            name="Crea/Edita Editoriales"
            component={editoriales}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
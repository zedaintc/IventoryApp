import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button } from 'react-native-paper'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import AddProduto from './src/pages/AddProduto'
import ListaProduto from './src/pages/ListaProdutos'
import ExlcuirOrEdit from './src/pages/ExcluirOrEdit'
import firebase from './firebaseConfig'


export default function invetoryapp() {

  const Stack = createStackNavigator()
  
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
       <Stack.Screen name="Home" component={Home} options={({navigation})=>({
         headerRight: () => (
            <Button color='#FFF' onPress={()=> navigation.navigate('Login')}>LOGOUT</Button>
         ),

         headerTransparent: true,
         headerTintColor: '#FFF',
         headerLeft: null,
         gestureEnabled: false,
        
       })} />
       <Stack.Screen name="AddProduto" component={AddProduto} options={{ 
         title: 'Adicionar Produto',
         headerTintColor: '#FFF',
         headerTransparent: true,
         }} />

       <Stack.Screen name="ListaProduto" component={ListaProduto} options={{ 
         title: 'Lista de Produtos',
         headerTintColor: '#FFF',
         headerTransparent: true,
         }} />

       <Stack.Screen name="ExcluirOrEdit" component={ExlcuirOrEdit} options={{ 
         title: 'Excluir ou Editar',
         headerTintColor: '#FFF',
         headerTransparent: true,
         }} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}
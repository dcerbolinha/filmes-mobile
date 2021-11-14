import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button} from "react-native-paper";
import Home from './src/screens/Home'
import Populares from "./src/screens/Filmes/Populares";
import Lancamentos from "./src/screens/Filmes/Lancamentos";
import Pesquisar from "./src/screens/Filmes/Pesquisar";
import Detalhes from "./src/screens/Filmes/Detalhes";
import DetalhesAtores from "./src/screens/Atores/DetalhesAtores";

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#d92f35',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
        >
          <Stack.Screen name="Home" component={Home} options={{title: 'IESB Filmes'}} />
          <Stack.Screen name="filmes/pesquisar" component={Pesquisar} options={
              ({ navigation }) => ({
                  title: 'Resultados',
                  headerRight: () => (
                      <Button
                          onPress={() => navigation.navigate('Home')}
                          icon="home"
                          color="#fff"
                      />
                  )
              })
          } />
          <Stack.Screen name="filmes/populares" component={Populares} options={
              ({ navigation }) => ({
                  title: 'Filmes Populares',
                  headerRight: () => (
                      <Button
                          onPress={() => navigation.navigate('Home')}
                          icon="home"
                          color="#fff"
                      />
                  )
              })} />
          <Stack.Screen name="filmes/lancamentos" component={Lancamentos} options={
              ({ navigation }) => ({
                  title: 'Lançamentos',
                  headerRight: () => (
                      <Button
                          onPress={() => navigation.navigate('Home')}
                          icon="home"
                          color="#fff"
                      />
                  )
              })} />
          <Stack.Screen name="filmes/detalhes" component={Detalhes} options={
              ({ navigation }) => ({
                  title: 'Detalhes',
                  headerRight: () => (
                      <Button
                          onPress={() => navigation.navigate('Home')}
                          icon="home"
                          color="#fff"
                      />
                  )
              })} />
          <Stack.Screen name="atores/detalhes" component={DetalhesAtores} options={
              ({ navigation }) => ({
                  title: 'Detalhes',
                  headerRight: () => (
                      <Button
                          onPress={() => navigation.navigate('Home')}
                          icon="home"
                          color="#fff"
                      />
                  )
              })} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

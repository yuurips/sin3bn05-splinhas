import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class App extends React.Component{
  render(){
    return(   
    <View style={styles.container}>
      <Text
        style={styles.title}
      >SPLinhas</Text>
      <Image
        style={{width: 100, height: 100, marginBottom: -200}}
        source={require('./assets/logo.png')}
      />
      <Text
        style={styles.body}
      >Informe aqui a linha que deseja buscar</Text>
      <TextInput
        style={styles.search}
        placeholder='Exemplo: 807M'
      />  
      <Button
         title = "Buscar"
         color = '#20B2AA'
      />
      
     </View>
      
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 30,
      paddingBottom: 20,
      fontWeight: "bold"
    },
    body: {
      fontSize: 15,
      paddingBottom: 25,
      marginTop: 300
    },
    search: {
      height: 40, 
      width: 300,
      borderBottomColor: '#20B2AA', 
      borderBottomWidth: 1,
      marginBottom: 20
    },
    button: {
      marginTop: 30,
      color: '#20B2AA',
      fontSize: 20
    }
  }
);
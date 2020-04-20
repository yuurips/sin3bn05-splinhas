import React from 'react';
import { StyleSheet, Text, Button, View, Image, TextInput,  } from 'react-native';

export default function Home(props) {
    const state = {
        username: "" 
    }
    return (
        <View style={styles.container}>
        <Text
            style={styles.title}
        >SPLinhas</Text>
        <Image
            style={{width: 100, height: 100, marginBottom: -200}}
            source={require('../assets/logo.png')}
        />
        <Text
            style={styles.body}
        >Informe aqui a linha que deseja buscar</Text>
        <TextInput
            style={styles.search}
            placeholder='Exemplo: 807M'
            value={state.username}  
            onChangeText={username => this.setState({ username })}  
        />  
        <Button
            title = "Buscar"
            color = '#20B2AA'
            onPress = { () => { props.navigation.navigate('Busca', { userName: state.username})}}
        />
        
        </View>
    )
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
          

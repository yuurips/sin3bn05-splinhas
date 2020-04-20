import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

export default function Busca(props) {
    {/* Exemplo para mostrar informações das linhas
        const state = {
        data: [
          { id: "00", name: "Relâmpago McQueen" },
          { id: "01", name: "Agente Tom Mate" },
          { id: "02", name: "Doc Hudson" },
          { id: "03", name: "Cruz Ramirez" }
        ]
      };*/}
    const { navigation } = props; 
    const user_name = navigation.getParam('userName');  

    return (
        <View style={styles.container}>
        <Text
            style={styles.title}>
            Resultados da busca</Text>
            <Text>Item pesquisado: {JSON.stringify(user_name)}</Text>


        {/* Exemplo para mostrar informações das linhas
        <SafeAreaView>
            <FlatList
            data={state.data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return (
                <View style={styles.item}>
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                );
            }}
            />
        </SafeAreaView>*/}
    
        </View>
    );
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
    },
    item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20
      },
      text: {
        color: "#333333"
      }
  }
);
import React, {useState} from 'react';

import {
    View, 
    StyleSheet, 
    Image, 
    Text, 
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList
} from 'react-native';

import api from '../components/api';

const TelaInicial = (props) => {

    const [linhas, setLinhas] = useState([]);
    const [buscaLinha, setBuscaLinha] = useState('');

    const capturaTexto = (textoDigitado) => {
        setBuscaLinha(textoDigitado);
    };

    const buscar = (linha) => {

        api.get('/Linha/Buscar', {
            params:{
              termosBusca: linha
            }
          })
          .then(function (response) {
            // handle success
            setLinhas(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }






    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={estilos.container}>
                <Text style={estilos.title}> SPLinhas </Text>
                <Image 
                    style={estilos.image}
                    source={require('../assets/logo.png')}
                />
                <Text style={estilos.body}> Linha pesquisada </Text>
                <TextInput
                    style={estilos.search}
                    placeholder='Exemplo: 807M'
                    onChangeText={capturaTexto}
                />  
                <Button
                    title = "Buscar"
                    color = '#20B2AA'
                    onPress = {() => {buscar(buscaLinha)}}
                />
                <View>
                    <FlatList 
                        data= {linhas}
                        renderItem = {linha =>  (
                            <View>
                                <Text> Linha: {linha.item.lt}</Text>
                                <Text> Sentido: {linha.item.sl}</Text>
                                <Text> Sentido: {linha.item.tp}</Text>
                                <Text> Sentido: {linha.item. ts}</Text>
                                <Text> -------------------------</Text>
                            </View>
                        )}                    
                    />
                </View>
        
        </View>
     </TouchableWithoutFeedback>
    );
};



const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 30,
        padding:5
    },
    title: {
        fontSize: 30,
        paddingBottom: 5,
        fontWeight: "bold"
    },
    body: {
        fontSize: 15,
        paddingBottom: 25,
        marginTop: 10
    },
    search: {
        height: 40, 
        width: 300,
        borderBottomColor: '#20B2AA', 
        borderBottomWidth: 1,
        marginBottom: 10
    },
      button: {
        marginTop: 30,
        color: '#20B2AA',
        fontSize: 20
    },
    image:{
        width: 100,
        height: 100
    }

});

export default TelaInicial;
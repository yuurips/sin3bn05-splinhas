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
    FlatList,
    Linking,
    Platform,
} from 'react-native';
import {Ionicons, FontAwesome} from "@expo/vector-icons"
import api from '../components/api';



const TelaInicial = (props) => {
    TelaInicial.navigationOptions = {
        title: 'Tela de Busca',
      }
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
                <Text style={estilos.body}> Informe aqui a linha que deseja buscar </Text>
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
                            <View style={estilos.card}>
                                <Text style={estilos.div}>
                                    <Text style={estilos.label}>Linha: </Text><Text style={estilos.item}>{linha.item.lt}</Text>
                                </Text>

                                <Text style={estilos.div}>
                                    <Text style={estilos.label}>Sentido: </Text>
                                
                                    {linha.item.sl === 1 ? <Text style={estilos.item}>{linha.item. ts} / {linha.item.tp} </Text> : 
                                    <Text style={estilos.item}>{linha.item. tp} / {linha.item.ts} </Text>} 

                                </Text>
                                <Ionicons name="md-bus"
                                    style={estilos.access}
                                    onPress={() => {
                                        if(Platform.OS === 'ios'){
                                            Linking.openURL('http://maps.apple.com/maps?daddr=-23.6311025,-46.7728957');
                                        } 
                                        else {
                                            Linking.openURL('http://maps.google.com/maps?daddr=-23.6311025, -46.7728957');
                                        }
                                    }
                                }
                                
                                /> 
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
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    item: {
        fontSize: 14,
        padding: 2,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        flex: 1,
    },
    label: {
        fontWeight: "bold",
        alignSelf: 'flex-start'
    },
    div: {
        alignSelf: 'flex-start'
    },
    access:{
        fontSize: 32,
        marginBottom: 10,
        marginTop: 5,
        padding: 1,
        color: '#20B2AA'
    },

});
export default TelaInicial;
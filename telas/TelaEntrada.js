import React from 'react';

import { View, Button, StyleSheet, Text, Image} from 'react-native';

import api from '../components/api';



const TelaEntrada = (props) => {

    api.post('/Login/Autenticar?token=3edb158a17e0c4287584a26c126f617c240f499f4ce477c4d621013181cfa018')
    .catch(function (error) {
        // handle error
        console.log(error);
    })

    return(
        <View style={estilos.container}>
            <Text style={estilos.title}> SPLinhas </Text>
            <Image 
                style={estilos.image}
                source={require('../assets/logo.png')}
            />
            <View style={estilos.botao}>
            <Button 
                title='ENTRAR'
                color = '#20B2AA'
                onPress = {() => {props.alteraTela()}}
                
            />
            </View>
        </View>

    );
};


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 50,
        paddingBottom: 20,
        fontWeight: "bold"
    },
    image:{
        width: 200,
        height: 200
    },
    botao:{
        marginTop:30

    }
});

export default TelaEntrada;

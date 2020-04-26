import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TelaInicial from './telas/TelaInical';
import TelaEntrada from './telas/TelaEntrada';


export default function App() {

  const[tela, setTela] = useState(1);

  let mostraTela;

  const telaSelecionada = () => {
    if(tela === 1){
      setTela(2);
    }else if(tela === 2) {
      setTela(1);
    }
  };

  if(tela === 1){

    mostraTela = <TelaEntrada alteraTela={telaSelecionada} />
  
  }else if(tela === 2){

    mostraTela = <TelaInicial alteraTela ={telaSelecionada}/>
  }
    
  return(   
      <View style={estilos.container}>

        {mostraTela}

      </View>
      
  );
  
}

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  }
});
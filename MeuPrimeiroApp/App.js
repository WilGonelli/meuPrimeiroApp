import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      numerofloat: false,
      resultado: 0,
      operacao1: ''

    };
    this.addNumero = this.addNumero.bind(this);
    this.op = this.op.bind(this);
  }

  op(operacao){
    
    if(operacao === '='){
      if(this.state.operacao1 === '+'){
        this.setState({
          resultado: Number(this.state.numero1) + Number(this.state.numero2)
        })
      }else if(this.state.operacao1 === '-'){
        this.setState({
          resultado: Number(this.state.numero1) - Number(this.state.numero2)
        })
      }else if(this.state.operacao1 === '*'){
        this.setState({
          
          resultado: Number(this.state.numero1) * Number(this.state.numero2)
        })
      }else if(this.state.operacao1 === '/'){
        this.setState({
          resultado: Number(this.state.numero1) / Number(this.state.numero2)
        })
      }else{
        this.setState({
          resultado: 'ERROR'
        })
      }
      this.setState({
        operacao1: '',
        numerofloat: false,
        numero1: '',
        numero2: '',
      })
      
    
    }else{
      this.setState({
        operacao1: operacao,
      })
    }
  }
  addNumero(valor){
    if (valor === ','){
      this.setState({
        numerofloat: true,
      })
    }
    if (this.state.operacao1 != ''){
      if(this.state.numero2 === ''){
        this.setState({
          numero2: valor,
        })
    
      }else{
        this.setState({
          numero2: this.state.numero2 + valor,
        })
      }
    }else{
      if(this.state.numero1 === ''){
        this.setState({
          numero1: valor,
        })
    
      }else{
        this.setState({
          numero1: this.state.numero1 + valor,
        })
      }
    }
    
    
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.area}>
        <Text style={styles.textovisor}>{this.state.numero1} {this.state.operacao1} {this.state.numero2}</Text>
          <Text style={styles.textovisor}>{this.state.resultado}</Text>
        </View>
          <View style={styles.teclado}>
          <View style={styles.areaNumerica1}>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('1')}> 
              <Text style={styles.texto}>1</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('2')}> 
              <Text style={styles.texto }>2</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('3')}> 
              <Text style={styles.texto }>3</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoOperacao} onPress={ () => this.op('/')}> 
              <Text style={styles.textoOp }>/</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.areaNumerica1}>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('4')}> 
              <Text style={styles.texto}>4</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('5')}> 
              <Text style={styles.texto }>5</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('6')}> 
              <Text style={styles.texto }>6</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoOperacao} onPress={ () => this.op('*')}> 
              <Text style={styles.textoOp }>*</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.areaNumerica1}>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('7')}> 
              <Text style={styles.texto}>7</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('8')}> 
              <Text style={styles.texto }>8</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('9')}> 
              <Text style={styles.texto }>9</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoOperacao} onPress={ () => this.op('-')}> 
              <Text style={styles.textoOp }>-</Text> 
            </TouchableOpacity>
          </View>
          <View style={styles.areaNumerica1}>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero(',')}> 
              <Text style={styles.texto}>,</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNumero} onPress={ () => this.addNumero('0')}> 
              <Text style={styles.texto }>0</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoOperacao} onPress={ () => this.op('=')}> 
              <Text style={styles.textoOp }>=</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoOperacao} onPress={ () => this.op('+')}> 
              <Text style={styles.textoOp }>+</Text> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    
  },
  area:{
    marginStart: 6,
    marginBottom: 100,
    paddingEnd: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'silver',
    marginTop: 30,
    alignItems: 'flex-end',
    width: 400,
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
  },
  areaNumerica1:{
    flexDirection: 'row',
    
    
  },
  botaoNumero:{
    height: 80,
    width: 80,
    backgroundColor: 'dimgray',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 3,
  },
  texto:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightgreen',

  },
  teclado:{
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
      
  },
  botaoOperacao:{
    height: 80,
    width: 80,
    backgroundColor: 'tomato',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 3,
  },
  textoOp:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',

  },
  textovisor:{
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',

  },

});

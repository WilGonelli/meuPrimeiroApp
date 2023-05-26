import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: '',
      operacao1: '',

    };
    this.addNumero = this.addNumero.bind(this);
    this.op = this.op.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  limpar(){
    this.setState({
      operacao1: '',
      numero1: '',
      numero2: '',
      resultado: ''
    })
  }
  op(operacao){
    var aux = false
    if(this.state.operacao1 != '' && operacao != '=' && this.state.numero2 != ''){
      aux = true
    }
    if(operacao === '=' || this.state.numero2 != '' ){

      if(this.state.operacao1 === '+'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) + Number(this.state.numero2.replace(",","."))
        })
      }else if(this.state.operacao1 === '-'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) - Number(this.state.numero2.replace(",","."))
        })
      }else if(this.state.operacao1 === '*'){
        this.setState({
          
          resultado: Number(this.state.numero1.replace(",",".")) * Number(this.state.numero2.replace(",","."))
        })
      }else if(this.state.operacao1 === '/'){
        this.setState({
          resultado: Number(this.state.numero1.replace(",",".")) / Number(this.state.numero2.replace(",","."))
        })
      }else{
        this.setState({
          resultado: 'ERROR'
        })
      }
      
        this.setState({
          operacao1: '',
          numero1: '',
          numero2: '',
        })
    }else{
      this.setState({
        operacao1: operacao,  
      })
      if(this.state.numero1 === '' && this.state.resultado != 0 ){
        this.setState({
        numero1: this.state.resultado.toString(),
        resultado: ''
      })
      }
    }
    if (aux){
      if(this.state.operacao1 === '+'){
        this.setState({
          numero1: (Number(this.state.numero1.replace(",",".")) + Number(this.state.numero2.replace(",","."))).toString()
        })
      }else if(this.state.operacao1 === '-'){
        this.setState({
          numero1: (Number(this.state.numero1.replace(",",".")) - Number(this.state.numero2.replace(",","."))).toString()
        })
      }else if(this.state.operacao1 === '*'){
        this.setState({
          
          numero1: (Number(this.state.numero1.replace(",",".")) * Number(this.state.numero2.replace(",","."))).toString()
        })
      }else if(this.state.operacao1 === '/'){
        this.setState({
          numero1: (Number(this.state.numero1.replace(",",".")) / Number(this.state.numero2.replace(",","."))).toString()
        })
      }else{
        this.setState({
          numero1: 'ERROR'
        })
      }
      this.setState({
        resultado: '',
        numero2: '',
        operacao1: operacao, 
      })
    }
  }
  addNumero(valor){
    this.setState({
      resultado: ''
    })
    if( valor === ','){
      if(this.state.numero1 === '0' || this.state.numero2 === '0'){
        valor = '0,'
      }
    }
    if (this.state.operacao1 != ''){
      if(this.state.numero2 === '' || this.state.numero2 === '0'){
        this.setState({
          numero2: valor,
        })
    
      }else{
        this.setState({
          numero2: this.state.numero2 + valor,
        })
      }
    }else{
      if(this.state.numero1 === '' || this.state.numero1 === '0'){
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
          <Text style={styles.textovisor}>{this.state.numero1.toString().replace(".",",")} {this.state.operacao1} {this.state.numero2.toString().replace(".",",")}</Text>
          <Text style={styles.textovisor}>{this.state.resultado.toString().replace(".",",")}</Text>
        </View>
        <View style={styles.teclado}>
          <View style={styles.areaNumerica1}>
            <TouchableOpacity style={styles.botaozera} onPress={ () => this.limpar()}> 
              <Text style={styles.textoOp}>CE</Text> 
            </TouchableOpacity>
          </View>
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
    justifyContent: 'center',  
  },
  area:{
    flex: 1,
    marginBottom: 20,
    paddingEnd: 10,
    backgroundColor: 'silver',
    marginTop: 100,
    alignItems: 'flex-end',
    width: 400,
    height: 100,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 5,
  },
  areaNumerica1:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center' 
  },
  botaoNumero:{
    flex: 1, 
    backgroundColor: 'dimgray',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 3,
  },
  botaozera:{
    
    flex: 1,
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
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',   
  },
  botaoOperacao:{
    flex: 1,
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

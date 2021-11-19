import { Component } from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;

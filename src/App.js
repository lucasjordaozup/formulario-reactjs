import { Component } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render(){
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}

export default App;

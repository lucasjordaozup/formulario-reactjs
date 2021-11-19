import React from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export default function FormularioCadastro(){
    return (
        <form>
            <TextField id="nome" variant="outlined" size="small" fullWidth label="Nome"/>
            
            <TextField id="sobrenome" variant="outlined" size="small" fullWidth label="Sobrenome"/>
            
            <TextField id="cpf" variant="outlined" size="small" fullWidth label="CPF"/>

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />
            
            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>            

        </form>
    );
}
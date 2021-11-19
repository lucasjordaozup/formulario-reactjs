import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

export default function FormularioCadastro() {
    return (
        <form>
            <TextField
                id="nome"
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
                label="Nome"
            />

            <TextField
                id="sobrenome"
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
                label="Sobrenome"
            />

            <TextField
                id="cpf"
                variant="outlined"
                size="small"
                margin="normal"
                fullWidth
                label="CPF"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch name="promocoes"
                        defaultChecked
                        color="primary"
                    />
                }
            />

            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked color="primary" />} />
            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

        </form>
    );
}
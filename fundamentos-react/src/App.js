import React from 'react';

import Primeiro from './components/basicos/Primeiro.js';
import ComParametro from './components/basicos/ComParametro.js';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Aleatorio min={1} max={1000}></Aleatorio>
            <Fragmento></Fragmento>
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"
                nota={9.3}>
            </ComParametro>
            <Primeiro></Primeiro>
        </div>
    )
}
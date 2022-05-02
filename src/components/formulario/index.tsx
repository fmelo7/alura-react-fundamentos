import React from 'react';
import Botao from '../botao';
import './style.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form action='' className='novaTarefa'>
                <div className='inputContainer'>
                    <label htmlFor='tarefa'>Adicione um novo estudo: </label>
                    <input type='text' id='tarefa' name='terefa' placeholder='O que voce quer estudar?' required></input>
                </div>
                <div className='inputContainer'>
                    <label htmlFor='tempo'>Tempo</label>
                    <input type='time' id='tempo' name='tempo' step='1' min='00:00:00' max='01:30:00' required></input>
                </div>
                <div className='inputContainer'>
                    <Botao />
                </div>
            </form>
        );
    }
}

export default Formulario;

import React, { SetStateAction } from 'react';
import { ITarefa } from '../../types/tarefas';
import Botao from '../botao';
import style from './formulario.module.scss';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
    state = {
        tarefa: '',
        tempo: '00:00',
    };

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas((tarefasAntigas) => [...tarefasAntigas, { ...this.state }]);
    }

    render() {
        return (
            <form onSubmit={this.adicionarTarefa.bind(this)} className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>Adicione um novo estudo: </label>
                    <input
                        type='text'
                        id='tarefa'
                        name='terefa'
                        value={this.state.tarefa}
                        onChange={(evento) => this.setState({ ...this.state, tarefa: evento.target.value })}
                        placeholder='O que voce quer estudar?'
                        required
                    ></input>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>Tempo</label>
                    <input
                        type='time'
                        id='tempo'
                        name='tempo'
                        value={this.state.tempo}
                        onChange={(evento) => this.setState({ ...this.state, tempo: evento.target.value })}
                        step='1'
                        min='00:00:00'
                        max='01:30:00'
                        required
                    ></input>
                </div>
                <div className={style.inputContainer}>
                    <Botao type='submit'>Adicionar</Botao>
                </div>
            </form>
        );
    }
}

export default Formulario;

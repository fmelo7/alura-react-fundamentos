import React, { useState } from 'react';
import { ITarefa } from '../../types/tarefas';
import Botao from '../botao';
import style from './formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState('');
    const [tempo, setTempo] = useState('00:00');

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas((tarefasAntigas) => [...tarefasAntigas, { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }]);
        setTarefa('');
        setTempo('00:00');
    }

    return (
        <form onSubmit={adicionarTarefa} className={style.novaTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='tarefa'>Adicione um novo estudo: </label>
                <input
                    type='text'
                    id='tarefa'
                    name='terefa'
                    value={tarefa}
                    onChange={(evento) => setTarefa(evento.target.value)}
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
                    value={tempo}
                    onChange={(evento) => setTempo(evento.target.value)}
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

export default Formulario;

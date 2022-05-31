import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Item from './item';
import style from './lista.module.scss';

interface Props {
    tarefas: ITarefa[];
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista({ tarefas, selecionarTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item {...item} key={item.id} selecionarTarefa={selecionarTarefa} />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;

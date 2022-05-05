import React from 'react';
import { ITarefa } from '../../types/tarefas';
import Item from './item';
import style from './lista.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item {...item} key={index} />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;

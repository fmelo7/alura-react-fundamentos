import React from 'react';
import Item from './item';
import style from './Lista.module.scss';

function Lista() {
    const tarefas = [
        {
            tarefa: 'Materia 1',
            tempo: '00:30:00',
        },
        {
            tarefa: 'Materia 2',
            tempo: '01:00:00',
        },
        {
            tarefa: 'Materia 3',
            tempo: '01:30:00',
        },
    ];
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

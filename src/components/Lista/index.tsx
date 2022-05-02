import React from 'react';

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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Lista;

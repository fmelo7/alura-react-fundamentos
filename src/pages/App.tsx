import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();

    function selecionarTarefa(tarefaSelecionada: ITarefa){
        setSelecionado(tarefaSelecionada);
    }

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista 
            selecionarTarefa={selecionarTarefa}
            tarefas={tarefas} />
            <Cronometro selecionado={selecionado} />
        </div>
    );
}

export default App;

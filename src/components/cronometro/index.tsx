import Botao from '../botao';
import Relogio from './relogio';
import style from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/time';
import { ITarefa } from '../../types/tarefas';
import { useEffect, useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao>Começar!</Botao>
        </div>
    );
}

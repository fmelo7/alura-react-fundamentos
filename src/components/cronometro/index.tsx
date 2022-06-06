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

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                regressiva(contador - 1);
            }
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
        </div>
    );
}

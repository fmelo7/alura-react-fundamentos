import Botao from '../botao';
import Relogio from './relogio';
import style from './cronometro.module.scss';
import { tempoParaSegundos } from '../../common/date';

export default function Cronometro() {
    console.log('conversao:',tempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar!</Botao>
        </div>
    );
}

import { ITarefa } from '../../../types/tarefas';
import style from '../../lista/lista.module.scss';

interface Props extends ITarefa {
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionarTarefa }: Props) {
    console.log('item', { tarefa, tempo, selecionado, completado, id });
    return (
        <div>
            <li className={style.item} onClick={() => selecionarTarefa({ tarefa, tempo, selecionado, completado, id })}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </div>
    );
}

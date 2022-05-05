import { ITarefa } from '../../../types/tarefas';
import style from '../../lista/lista.module.scss';

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa) {
    console.log('item', { tarefa, tempo, selecionado, completado, id });
    return (
        <div>
            <li className={style.item}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </div>
    );
}

import { ITarefa } from '../../../types/tarefas';
import style from '../item/item.module.scss';
interface Props extends ITarefa {
    selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selecionado, completado, id, selecionarTarefa }: Props) {
    console.log('item', { tarefa, tempo, selecionado, completado, id });
    return (
        <div>
            <li
                className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
                onClick={() => !completado && selecionarTarefa({ tarefa, tempo, selecionado, completado, id })}
            >
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </div>
    );
}

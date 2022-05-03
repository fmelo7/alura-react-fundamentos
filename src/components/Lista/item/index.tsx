import style from '../../lista/lista.module.scss';

export default function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
    return (
        <div>
            <li className={style.item}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
            </li>
        </div>
    );
}

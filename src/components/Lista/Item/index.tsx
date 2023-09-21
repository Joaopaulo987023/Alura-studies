import { ITarefas } from "../../../types/tarefas";
import style from "../Lista.module.scss";

interface Props extends ITarefas{
  
  selecionaTarefa : (selecionaTarefa:ITarefas)=>void
}

export default function Item(
  {tarefa,
    tempo,
    id,
    completado,
    selecionado,
    selecionaTarefa
  }: Props){
  console.log({tarefa,tempo,id,completado,selecionado})
  return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado:""} ${completado? style.itemCompletado:""}`} onClick={()=> !completado && selecionaTarefa({ 
          tarefa,
          tempo,
          id,
          completado,
          selecionado})
        }>
                    <h3>{tarefa}</h3>
                    <span>{tempo}</span>
                    {completado && <span className={style.concluido}
                    aria-aria-label="tarefa completada"></span>}
                    {/* rederização condicional, se completado ele vai adicionar um span com um estilo de concluido . */}
        </li>
  )
}



import style from './Lista.module.scss';
import Item from './Item';
import { ITarefas } from '../../types/tarefas';

interface IProps{
  tarefas:ITarefas[],
  selecionaTarefa: (tarefaSelecionada:ITarefas)=>void
}
export default function Lista({tarefas,selecionaTarefa }:IProps) {
  
  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tarefas.map((item)=>(
               <Item
                selecionaTarefa={selecionaTarefa}
                key={item.id}
                {...item} //podemos desestruturar as itens que vao ser passado como props
                        //  para que não precisemos usar tarefa = {item.tarefa} tempo ={item.tempo}
               /> 
            )
            )}
        </ul>
    </aside>
  )
}

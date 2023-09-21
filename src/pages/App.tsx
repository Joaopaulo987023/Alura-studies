import { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { ITarefas } from '../types/tarefas';



function App() {
  const [tarefas,setTarefas]=useState<ITarefas[] | []>([])//tipando o useState
  //dizendo que ele pode ser um array de ITarefas ou um array vazio
  const [selecionado,setSelecionado]=useState<ITarefas> ()
  
  function selecionaTarefa(tarefaSelecionada:ITarefas){
      setSelecionado(tarefaSelecionada)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id 
      })))//pegando a tarefa anterior e fazendo um map nela para saber se o id dela é o mesmo do id da tarefa selef
  }
  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores=>tarefasAnteriores.map(tarefa=>{
        if(tarefa.id===selecionado.id){
          return {...tarefa,
          selecionado:false,
          completado:true}
        }
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}/>
        <Lista 
        selecionaTarefa={selecionaTarefa}
        tarefas={tarefas}/>
        <Cronometro finalizarTarefa={finalizarTarefa}
        selecionado={selecionado}/>
    </div>
  );
}

export default App;

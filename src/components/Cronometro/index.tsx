import style from './Cronometro.module.scss'
import Botao from '../Botao'
import Relogio from './Relogio'
import tempoParaSegundos from '../../common/utils/time'
import { ITarefas } from '../../types/tarefas'

import { useEffect,useState } from 'react';
interface Props {
  selecionado : ITarefas | undefined,
  //pode ser ITarefas ou tbm undefined
  finalizarTarefa: () => void
}
export default function Cronometro({selecionado,finalizarTarefa}:Props) {

    const[tempo,setTempo]=useState<number>()
    //criando um estado para controlar o tempo e tipando ele como number

    useEffect(() => {
      if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
      }
    }, [selecionado])

    //usando o useEffect para atualizar o cronometro cada vez que o selecionado mudar.

    function regressiva(contador:number = 0 ){
        setTimeout(()=>{
          if(contador>0){
            setTempo(contador-1)
            return regressiva(contador-1);
          }
          finalizarTarefa()
        },1000)
          
    }
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
        </div>
        <Botao onClick={()=>regressiva(tempo)}>
            Começar!
        </Botao>
    </div>
  )
}

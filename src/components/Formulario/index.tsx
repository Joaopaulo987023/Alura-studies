import React, { useState } from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss'
import { ITarefas } from "../../types/tarefas";
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTarefas :React.Dispatch<React.SetStateAction<ITarefas[]>>
}

function Formulario({setTarefas}:Props){
    const [tarefa,setTarefa]=useState("")
    const [tempo,setTempo]=useState("00:00")
    function adicionarTarefa(event:React.FormEvent<HTMLFormElement>){ //tipagem, evento do tipo formulario, que recebe um html form
        event.preventDefault()
        setTarefas(tarefasAntigas=>
            [
                ...tarefasAntigas,
                {   tarefa,
                    tempo,
                    completado:false,
                    selecionado:false,
                    id: uuidv4()
                }
            ])
            setTarefa("");
            setTempo("00:00");
        //dizendo que vou manter as tarefas antigas e vou fazer um spread adicionando 
        //um novo obj tarefa que contem um tempo e uma tarefa.


         //resetando o campo de tarefas e tempo assim que eu submeter os arquivos

    }
    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                {/* usando o .bind(this) por conta do problema com o escopo e o this *, escopo da fuction não tem escopo global. direfente da arrow function*/}
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text"
                    value={tarefa}
                    id="tarefa"
                    name="tarefa"
                    required
                    placeholder="O que você quer estudar"
                    onChange={event=> setTarefa( event.target.value)}
 
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time"
                        name="tempo"
                        value={tempo}
                        id="tempo" 
                        required
                        step='1'
                        max="01:30:00"
                        min="00:00:00"
                        
                        onChange={event=> setTempo(event.target.value)}
                        />
                    
                </div>
                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
    )
}



export default Formulario
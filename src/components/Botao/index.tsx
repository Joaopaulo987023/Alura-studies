import React from "react";
import style from './Botao.module.scss'
interface IProps{
    children?: React.ReactNode; //tivemos que tipar o children
    type ?:"button"|"submit"|"reset"|undefined
    onClick?:()=>void

}
function Botao({onClick,type, children}:IProps){
    return(
    <button onClick={onClick}
     type={type}
    className={style.botao}>
        {children}
    </button>)
}

export default Botao
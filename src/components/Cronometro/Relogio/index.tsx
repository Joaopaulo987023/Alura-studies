import style from "./Relogio.module.scss"
interface Props{
  tempo: number | undefined
}
export default function Relogio({tempo = 0 }:Props) {
    //primeiro colocamos o valor default do tempo como 0

    //transformamos os valores de tempo que estão em segundos para minutos e para os segundos 
    //nós pegamos apenas o que sobra.  
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    

    //transformamos os minutos em uma string para poder manipular ela usando a desestruturação
    //já que uma string nada mais é do que um Array de caracteres. 

    //pegamos o que está no indice 0 e o indice 1 
    const[dezenaMinutos,unidadeMinutos] = String(minutos).padStart(2,"0")
    const[dezenaSegundos,unidadeSegundos]= String(segundos).padStart(2,"0")

    //usando uma função de string chamada padStart permite que teremos uma cadeia de caracter padrão
    //nesse caso a cadeia minima de caracter é 2 pois queremos 01:01 e o zero é o valor padrao



  return (
    <>
        <span className={style.relogioNumero}>{dezenaMinutos}</span>
        <span className={style.relogioNumero}>{unidadeMinutos}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{dezenaSegundos}</span>
        <span className={style.relogioNumero}>{unidadeSegundos}</span>
    </>
  )
}

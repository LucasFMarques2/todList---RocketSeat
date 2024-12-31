import { CheckCircle, Circle, Trash } from "phosphor-react";
import checkedButton from '../../assets/checkedButton.svg'
import style from './style.module.css'
import { useState } from "react";

export function TaskList({concluido=false}){
    const [checked , setChecked] = useState(concluido)

    function handleChecked(){
        setChecked((prevState) => !prevState)
    }

    return(
        <div className={checked ? style.taskConluida : style.task}>
            <button 
                onClick={handleChecked} 
                className={checked ? style.checkFinishedButton : style.checkButton}> 
                          {checked ? <img src={checkedButton} alt="" /> : <Circle size={20} />}
            </button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer itegeraaa.</p>
            <button className={style.deleteButton}><Trash size={20}/></button>
        </div>
    )
}
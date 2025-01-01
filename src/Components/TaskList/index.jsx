import { CheckCircle, Circle, Trash } from "phosphor-react";
import checkedButton from '../../assets/checkedButton.svg'
import style from './style.module.css'
import { useState } from "react";

export function TaskList({ check, task, onToggleCheck, onDeleteTask}){
    function handleDeleteTask(){
        onDeleteTask(task)
    }

    return(
        <div className={check ? style.taskConluida : style.task}>
            <button 
                onClick={onToggleCheck} 
                className={check ? style.checkFinishedButton : style.checkButton}> 
                          {check? <img src={checkedButton} alt="" /> : <Circle size={20} />}
            </button>
            <p>{task}</p>
            <button onClick={handleDeleteTask} className={style.deleteButton}><Trash size={20}/></button>
        </div>
    )
}
import { CheckCircle, Circle, Trash } from "phosphor-react";
import style from './style.module.css'

export function TaskList(){
    return(
        <div className={style.task}>
            <button className={style.checkButton}><Circle size={20} /></button>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer itegeraaa.</p>
            <button className={style.deleteButton}><Trash size={20}/></button>
        </div>
    )
}
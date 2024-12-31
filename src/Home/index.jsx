import { Header } from "../Components/Header"
import { TaskList } from "../Components/TaskList"
import { PlusCircle } from "phosphor-react"
import style from './index.module.css'

export function Home(){
    return(
        <div className={style.home}>
            <Header/>
            <section className={style.tasksArea}>
                <form >
                    <input type="text" name="" placeholder="Adicione uma nova tarefa" id="" />
                    <button type="submit">Criar <PlusCircle size={20}/></button>
                </form>
                <div className={style.taskStatusTitle}>
                    <p>Tarefas criadas <span>5</span></p>
                    <p>Concluída <span>0 de 5</span></p>
                </div>
                <TaskList/>
                <TaskList/>
                <TaskList concluido/>
            </section>
        </div>
    )
}
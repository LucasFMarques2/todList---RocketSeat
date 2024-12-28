import { Header } from "../Components/Header"
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
            </section>
        </div>
    )
}
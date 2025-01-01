import { Header } from "../Components/Header"
import { TaskList } from "../Components/TaskList"
import { PlusCircle } from "phosphor-react"
import defaultIcon from '../assets/defaultIcon.svg'
import style from './index.module.css'
import { useState } from "react"


export function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event) {
        event.preventDefault();
        const newTask = { text: newTaskText, checked: false }; 
        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function handleNewTaskChange(event) {
        setNewTaskText(event.target.value);
    }

    function handleCheckedTask(index) {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, checked: !task.checked } : task
        );
        setTasks(updatedTasks);
    }

    function deleteTask(taskToDelet){
        const taskListWhitoutTaskToDelete = tasks.filter(task => task.text !== taskToDelet);
        setTasks(taskListWhitoutTaskToDelete);
    }

    return (
        <div className={style.home}>
            <Header />
            <section className={style.tasksArea}>
                <form onSubmit={handleCreateNewTask}>
                    <input
                        type="text"
                        name="newTask"
                        placeholder="Adicione uma nova tarefa"
                        value={newTaskText}
                        onChange={handleNewTaskChange}
                        required
                    />
                    <button type="submit">Criar <PlusCircle size={20} /></button>
                </form>
                <div className={style.taskStatusTitle}>
                    <p>Tarefas criadas <span>{tasks.length}</span></p>
                    <p>Concluídas <span>{tasks.filter(task => task.checked).length} de {tasks.length}</span></p>
                </div>
                <div className={tasks.length === 0 ? style.taskListArea : style}>
                   {tasks.length === 0 ? (
                    <>
                     <img src={defaultIcon} alt="Icone de agenda vazia" />
                     <p>Você ainda não tem tarefas cadastradas</p>
                     <span>Crie tarefas e organize seus itens a fazer</span>
                    </>
                   ) : (tasks.map((task, index) => (
                    <TaskList
                        key={index}
                        task={task.text}
                        check={task.checked}
                        onToggleCheck={() => handleCheckedTask(index)} 
                        onDeleteTask={deleteTask}
                    />
                )))}
                </div>
            </section>
        </div>
    );
}
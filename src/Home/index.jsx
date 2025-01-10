import { Header } from "../Components/Header"
import { TaskList } from "../Components/TaskList"
import { PlusCircle } from "phosphor-react"
import defaultIcon from '../assets/defaultIcon.svg'
import style from './index.module.css'
import { useReducer, useState } from "react"


export function Home() {
    const [tasks, dispatch] = useReducer(tasksReducer, [])
    const [newTaskText, setNewTaskText] = useState('');

    function tasksReducer(tasks, action){
        switch (action.type){
            case 'created_new_task':{
                return [...tasks, {
                    id: Date.now(),
                    text: action.text,
                    checked: false
                }]
            }
            case 'toggle_task' :{
                return tasks.map((task) => 
                    task.id === action.id ? {...task, checked: !task.checked} : task
                )
            }
            case 'deleted_task':{
                return tasks.filter((task) => task.id !== action.id)
            }
            default: {
                console.error(`Ação desconhecida: ${action.type}`);
                return tasks;
            }
            
        }
    }

    function handleCreateNewTask(event) {
        event.preventDefault();
        dispatch({
            type: 'created_new_task',
            text: newTaskText
        })
        setNewTaskText('');
    }

    function handleNewTaskChange(event) {
        setNewTaskText(event.target.value);
    }

    function handleCheckedTask(id) {
        dispatch({
            type: 'toggle_task',
            id: id,
        });
    }

    function deleteTask(id){
        dispatch({
            type: 'deleted_task',
            id: id
        })
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
                   ) : (tasks.map((task) => (
                    <TaskList
                        key={task.id}
                        task={task.text}
                        check={task.checked}
                        onToggleCheck={() => handleCheckedTask(task.id)} 
                        onDeleteTask={() => deleteTask(task.id)}
                    />
                )))}
                </div>
            </section>
        </div>
    );
}
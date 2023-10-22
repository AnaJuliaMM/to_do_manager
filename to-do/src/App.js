import React, {useState} from 'react'
import './App.css'
import Task from './components/task/Task';
import TaskForm from './components/taskForm/TaskForm';

export default function App(){
  // Utilizar useState para re-renderizar a variável de uma tarefa quando ela for alterada
  // O valor inicial da variável é uma lista(array) de objetos que representam tarefas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Comprar capinha do tablet ',
      category: 'Pessoal',
      isDone: false
    }, 
    {
      id: 2,
      description: 'Desenvolver aplicação to-do e submeter no 27box',
      category: 'Acadêmico',
      isDone: false
    },
    {
      id: 3,
      description: 'Revisar o artigo de IA',
      category: 'Acadêmico',
      isDone: false
    }
  ])


  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='task-list'>
        {/*Percorre cada tarefa da lista (tasks) e retorna um componente com as informações dela */}
        {tasks.map((task) => <Task task={task}/>)}
      </div>
      <TaskForm/>
    </div>);
}
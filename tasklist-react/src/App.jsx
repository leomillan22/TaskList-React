import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Tasks from './Components/Tasks'

function App() {

  const [tasks, setTasks] = useState([])

  const newTaskAdd = (taskName) =>{
    setTasks([...tasks, taskName])
    console.log(tasks)
  }
  return (
    <>
      <Form newTaskAdd={taskName => newTaskAdd(taskName) }/>
      <h1>Tasks to do - </h1>
      {tasks.map(taskName => <Tasks key={taskName.nome} nome={taskName.nome}/> )}
    </>
  )
}

export default App

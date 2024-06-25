import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import './form.css'

const Form = (props) => {

    const [taskName, setTaskName] = useState('')

    const newTask = (event) =>{
        event.preventDefault()
        props.newTaskAdd({taskName})
        setTaskName('')
    }

    return (
        <section>
            <form className='form' onSubmit={newTask}>
                <Input valor={taskName} />
                <Button />
            </form>
        </section>
    )
}

export default Form
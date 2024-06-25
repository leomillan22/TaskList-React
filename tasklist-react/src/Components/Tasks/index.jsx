import './Tasks.css'

const Tasks = ({nome}) => {
    return(
        <section className='Tasks'>
            <h1>{nome}</h1>
            <div>
                <button>C</button>
                <button>D</button>
            </div>
        </section>
    )
}

export default Tasks
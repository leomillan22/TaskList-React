import './input.css'

const Input = (props) => {
    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='input'>
            <input placeholder="Add a new task..." value={props.valor} onChange={aoDigitado}/>
        </div>
    )
}   

export default Input 
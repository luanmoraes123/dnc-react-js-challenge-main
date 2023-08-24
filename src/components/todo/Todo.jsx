import React, {useState, useEffect} from 'react'
import './index.scss'
import Tarefas from '../tarefas/Tarefas';
import novaTarefa from '../../icones/new.svg'

const Todo = (props) => {

    const [tarefas, setTarefas] = useState(props.lista);
    
    useEffect(() => {
        props.onSubmit(tarefas);
    }, [tarefas])
    
    
    return (
        <section className='todo'>
            <div className='head'>
                <h2>Tarefas</h2>
                <h2>Status</h2>
                <h2>Opções</h2>
            </div>
            <div className='barra'></div>
            {
                    props.lista.map((tarefa, index) => (
                        <Tarefas tarefa={tarefa} index={index} key={index} />
                    ))     
            }
            <form className='novaTarefa' onSubmit={(event)=> {
                event.preventDefault();
                const input = document.querySelector('#novaTarefa');
                setTarefas([...tarefas, input.value]);
                input.value = '';
            }}>
                <input placeholder='nova tarefa...' type="text" id='novaTarefa'/>
                <button type='submit'><img src={novaTarefa} alt=""/></button>
            </form>
        </section>
    )
}

export default Todo;
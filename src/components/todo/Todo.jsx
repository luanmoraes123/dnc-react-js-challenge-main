import React from 'react'
import './index.scss'
import Tarefas from '../tarefas/Tarefas';
import novaTarefa from '../../icones/new.svg'

const Todo = () => {

    const tarefas = ['lavar casa', 'lavar prato', 'dar comida ao cachorro'];
    const adicionaTarefa = () => {
        const input = document.querySelector('#novaTarefa');
        tarefas.push(input.value);
    }
    return (
        <section className='todo'>
            <div className='head'>
                <h2>Tarefas</h2>
                <h2>Status</h2>
                <h2>Opções</h2>
            </div>
            <div className='barra'></div>
            {
                tarefas.map((tarefa, index) => (
                    <Tarefas tarefa={tarefa} index={index} key={index} />
                ))
            }
            <div className='novaTarefa'>
                <input placeholder='nova tarefa...' type="text" id='novaTarefa'/>
                <button onClick={adicionaTarefa}><img src={novaTarefa} alt="" onClick={adicionaTarefa} /></button>
            </div>
        </section>
    )
}

export default Todo;
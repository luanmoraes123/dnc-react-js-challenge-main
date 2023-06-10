import React from 'react'
import './index.scss'
import Tarefas from '../tarefas/Tarefas';

const Todo = () => {
    return (
        <section className='todo'>
            <div className='head'>
                <h2>Tarefas</h2>
                <h2>Status</h2>
                <h2>Opções</h2>
            </div>
            <div className='barra'></div>
            <Tarefas />
        </section>
    )
}

export default Todo;
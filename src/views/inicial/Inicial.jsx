import React from 'react'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/header/Header';
import Todo from '../../components/todo/Todo';
import Edit from '../edit/Edit';
import Remove from '../remove/Remove';
import './index.scss'

const Inicial = () => {

    const [tarefas, setTarefas] = useState(JSON.parse(localStorage.getItem('tarefas')) || []);
    

    return (
        <div>
            <Header/>
            <div className='principal'>
                <h1 className='principal__heading'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
                <Routes>
                    <Route path='/' element={<Todo lista={tarefas} onSubmit={(novaLista) => {
                        setTarefas(novaLista);
                    }}/>}/>
                    <Route path="/edit/:id" element={<Edit lista={tarefas}/>} />
                    <Route path='/remove/:id' element={<Remove lista={tarefas} onSubmit={(novaLista) => {
                        setTarefas(novaLista);
                    }}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Inicial;
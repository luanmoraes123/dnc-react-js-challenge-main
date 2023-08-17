import React from 'react'
import Header from '../../components/header/Header';
import Todo from '../../components/todo/Todo';
import './index.scss'

const Inicial = () => {
    return (
        <div>
            <Header/>
            <div className='principal'>
                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
                <Todo />
            </div>
        </div>
    )
}

export default Inicial;
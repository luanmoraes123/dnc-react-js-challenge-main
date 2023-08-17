import React, { Component } from 'react'
import './index.scss'
import trash from '../../icones/edit.svg'
import del from '../../icones/delete.svg'

const Tarefas = ({tarefa, index}) => {
        return (
            <div className='tarefas'>
                <div className='container'>
                <p>
                    {tarefa}
                </p>
                </div>
                <div className='container'>
                <input id={index} type="checkbox" />
                <label htmlFor={index}></label>
                </div>
                <div className='container__button'>
                    <button><img src={trash} alt="" /></button>
                    <button><img src={del} alt="" /></button>
                </div>
            </div>
        )
}

export default Tarefas;
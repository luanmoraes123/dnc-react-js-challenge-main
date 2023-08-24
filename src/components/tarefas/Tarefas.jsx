import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                    <button><Link to={`/edit/${index}`}><img src={trash} alt="" /></Link></button>
                    <button><Link to={`/remove/${index}`}><img src={del} alt="" /></Link></button>
                </div>
            </div>
        )
}

export default Tarefas;
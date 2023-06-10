import React from 'react'
import './index.scss'

const Header = () => {
    return (
        <header className='header'>
            <ul>
                <li><a href="">Organização</a></li>
                <li className='background-white'><a className="tarefas" href="">Tarefas</a></li>
            </ul>
        </header>
    )
}

export default Header;
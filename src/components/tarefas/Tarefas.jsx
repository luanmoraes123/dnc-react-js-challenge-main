import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import trash from '../../icones/edit.svg'
import del from '../../icones/delete.svg'
import { BsFillGearFill } from 'react-icons/bs'


const Tarefas = ({tarefa, index}) => {

    const [config, setConfig] = useState(false);

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
                    {config && (
                        <>
                            <button><Link to={`/edit/${index}`}><img src={trash} alt="" /></Link></button>
                            <button><Link to={`/remove/${index}`}><img src={del} alt="" /></Link></button>
                        </>
                    )
                    }                   
                    <button onClick={() => setConfig(!config)}><BsFillGearFill cursor={'pointer'} color='white' size={25} /></button>
                </div>
            </div>
        )
}

export default Tarefas;
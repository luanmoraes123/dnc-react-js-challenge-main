import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './index.scss'
const Edit = (props) => {

  const [tarefas, setTarefas] = useState(props.lista);
  const [redirect, setRedirect] = useState(false);
  const {id} = useParams();
  const tarefa = tarefas[id];
  const navigate = useNavigate();

  const handleClick = () => {
    const input = document.querySelector('.edit__input');
    const novasTarefas = [...tarefas];
    novasTarefas[id] = input.value;
    setTarefas(novasTarefas);
    setRedirect(true);
    
  }

  useEffect(() => {
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
  }, [tarefas]);

  useEffect(() => {
    if(redirect){
      navigate('/');
    }

  }, [redirect])
  
  

  return (
    <div className='edit'>
      <h1 className='edit__heading'>Deseja editar esse item?</h1>
      <p className='edit__tarefa'>{tarefa}</p>
      <form className='edit__form' action="">
        <label htmlFor="">Digite a nova tarefa aqui:</label>
        <input className='edit__input' type="text" />
        <div>
        <button onClick={handleClick} className='edit__button'>Sim</button>
        <button className='edit__button'><Link to={'/'}>Não</Link></button>
        </div>
      </form>

    </div>
  )
}

export default Edit
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './index.scss'

const Remove = (props) => {

  const [tarefas, setTarefas] = useState(props.lista);
  const [redirect, setRedirect] = useState(false);
  const {id} = useParams();
  const tarefa = tarefas[id];
  const navigate = useNavigate();

  const handleClick = () => {
    const input = document.querySelector('.edit__input');
    const novasTarefas = [...tarefas];
    novasTarefas.splice(id, 1);
    setTarefas(novasTarefas);
    setRedirect(true);
    
  }

  useEffect(() => {
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
      props.onSubmit(tarefas);
  }, [tarefas]);

  useEffect(() => {
    if(redirect){
      navigate('/');
    }

  }, [redirect]);
  return (
                <section className='remove'>
                  <h2 className='remove__heading'>Deseja escluir esse item?</h2>
                  <p className='remove__tarefa'>{tarefa}</p>
                  <div>
                    <button className='remove__button' onClick={handleClick}>Sim</button>
                    <button className='remove__button'><Link to='/'>Não</Link></button>
                  </div>
                </section>
  )
}

export default Remove
import axios from 'axios'
import React, { useState } from "react";
import  {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/nota'

const CreateNota = () => {

    const [ titulo, setTitulo] = useState('');
    const [ descricao, setDescricao] = useState('');
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {titulo: titulo, descricao: descricao})
        navigate('/') 
    }
    return (
        <div>
            <h3 className='my-3'>Criar Anotação</h3>
            <form onSubmit={store} className="col-sm-6 offset-sm-3">
                <div className='mb-3'>
                    <label className='form-label'>Título</label>
                    <input type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)} className="form-control" autoFocus required/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Descrição</label>
                    <input type="text" value={descricao} onChange={(e)=> setDescricao(e.target.value)} className="form-control" placeholder='Opcional' />
                </div>
                <Link className="btn btn-outline-secondary mx-2" to='/'>Voltar</Link>
                <button type='submit' className='btn btn-primary'>Salvar</button>
            </form>
        </div>
    )
}

export default CreateNota
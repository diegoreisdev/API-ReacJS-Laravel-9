import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/nota/'

const EditNota = () => {
    const [ titulo, setTitulo] = useState('');
    const [ descricao, setDescricao] = useState('');
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {titulo: titulo, descricao: descricao})
        navigate('/')
    }

    useEffect( () => {
        const getNotaById = async () => {
           const response = await axios.get(`${endpoint}${id}`)
           setTitulo(response.data.titulo)
           setDescricao(response.data.descricao)
        }
        getNotaById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
    return (
        <div>
        <h3 className='my-3'>Editar Anotação</h3>
       
        <form onSubmit={update} className="col-sm-6 offset-sm-3">
            <div className='mb-3'>
                <label className='form-label'>Título</label>
                <input type="text" value={titulo} onChange={(e)=> setTitulo(e.target.value)} className="form-control" required/>
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

export default EditNota
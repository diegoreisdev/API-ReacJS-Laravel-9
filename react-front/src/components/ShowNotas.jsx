import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowNotas = () => {
    const [ notas, setNotas ] = useState([])
    useEffect(() => {
        getAllNotas()
    })
    const getAllNotas = async () => {
        const response = await axios.get(`${endpoint}/notas`)
        setNotas(response.data)
    }

    const deleteNota = async (id) => {
        await axios.delete(`${endpoint}/nota/${id}`)
        getAllNotas()
    }
    return (
        <div>
            <h3 className="my-3">Bloco de Notas</h3>
            <table className="table table-striped">
                <thead>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    { notas.map( (nota) => (
                        <tr key={nota.id}>
                            <td> {nota.titulo}</td>
                            <td> {nota.descricao}</td>
                            <td>
                                <Link to={`/edit/${nota.id}`} className="btn btn-success">Editar</Link>
                                <button onClick={ ()=>deleteNota(nota.id) } className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    )) }
                   
                </tbody>
            </table>
        </div>
    )
}
export default ShowNotas
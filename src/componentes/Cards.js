import React, { useState } from 'react'
import { usePais } from '../hooks/usePais'
import { Cargando } from './Cargando';

export const Cards = () => {

    const { paises, cargando } = usePais();
    const [paginaActual, setPaginaActual] = useState(0);
    const [search, setSearch] = useState('');

    const paisesFiltrados = () => {
        if (search.length === 0)
            return paises.slice(paginaActual, paginaActual + 15);

        // console.log(pais.nombre)
        const filtrado = paises.filter(pais => pais.nombre.toLowerCase().includes(search));
        return filtrado
    }

    const nextPage = () => {
        setPaginaActual(paginaActual + 15)
    }

    const previewPage = () => {
        if (paginaActual > 0) {
            setPaginaActual(paginaActual - 15)
        }
    }

    const searchChange = ({ target }) => {
        setPaginaActual(0);
        setSearch(target.value)
    }

    return (
        <div className='contenedor-principal'>
            <div className='buscador'>
                <input
                    type="text"
                    placeholder="Buscar Pais"
                    value={search}
                    onChange={searchChange}
                >
                </input>
            </div>
            <div className='contenedor-botones'>
                <div className="botones" id="paginacion">

                    <button
                        className="btn btn-primary preview"
                        onClick={previewPage}
                    >
                        Preview
                    </button>

                    <h1 className='parrafo-paises'>PAISES</h1>

                    <button
                        className="btn btn-primary next"
                        onClick={nextPage}
                    >
                        Next
                    </button>

                </div>
            </div>

            <div className='columnas-de-cards'>
                {
                    paisesFiltrados().map(({ bandera, nombre, capital }) => (
                        <div key={nombre} className="cards-estilo">
                            <div>
                                <img
                                    src={bandera}
                                    alt={nombre}
                                    className="imagen-clase"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="nombre">{nombre}</h5>
                                <p className="capital">{capital}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {
                cargando && <Cargando />
            }
        </div>
    )
}

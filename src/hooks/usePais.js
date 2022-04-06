import { useEffect, useState } from 'react'
import { fetchPaisesAll } from '../helpers/fetchPaisesAll'

export const usePais = () => {

    const [cargando, setCargando] = useState(true)
    const [paises, setPaises] = useState([])

    useEffect(() => {
        fetchPaisesAll()
            .then(paises => {
                // console.table(paises)

                setCargando(false);
                setPaises(paises)
            })
    }, [])


    return {
        cargando,
        paises
    }
}

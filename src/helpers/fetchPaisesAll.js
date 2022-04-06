
export const fetchPaisesAll = async () => {

    // son 250 paises en total
    // 0-99 100-199 200-249

    const url = "https://restcountries.com/v3.1/all";

    try {
        const res = await fetch(url)
        const data = await res.json()

        // console.log(data)

        return pintarCard(data)

    } catch (error) {
        console.log(error)
    }
}

const pintarCard = (data) => {

    // console.log(data)
    const listaPaises = data?.map(item => {

        const bandera = item.flags.svg
        const nombre = item.name.common
        const capital = item.capital ? item.capital[0] : undefined

        // console.log(nombre)
        const paisArray = {
            bandera,
            nombre,
            capital
        }

        // console.log(paisArray)
        return paisArray
    });

    // console.log(listaPaises)
    return listaPaises
}
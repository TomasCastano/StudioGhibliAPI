import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SpecieItem = () => {

    const { id } = useParams()

    const [species, setSpecies] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/species`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setSpecies(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    const filteredSpecies = species.filter((specie) =>
        specie.films.some((filmUrl) => filmUrl.includes(id))
    )

    return (
        <>
        {filteredSpecies.map(specie => (
            <tr key={specie.id}>
                <td>{specie.name}</td>
                <td>{specie.classification}</td>
            </tr>
        ))}
        </>
    )
}

export default SpecieItem
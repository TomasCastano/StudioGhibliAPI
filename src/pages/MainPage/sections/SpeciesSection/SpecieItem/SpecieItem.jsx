import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SpecieItem = () => {
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

    return (
        <>
        {species.map(specie => (
            <tr key={specie.id}>
                <td><Link to={`/species/${specie.id}`}>{specie.name}</Link></td>
                <td>{specie.classification}</td>
            </tr>
        
        ))}
        </>
    )
}

export default SpecieItem
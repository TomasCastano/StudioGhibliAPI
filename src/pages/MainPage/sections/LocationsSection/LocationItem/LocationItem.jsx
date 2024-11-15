import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const LocationItem = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/locations`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLocations(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    return (
        <>
        {locations.map(location => (
            <tr key={location.id}>
                <td><Link to={`/location/${location.id}`}>{location.name}</Link></td>
                <td>{location.climate}</td>
                <td>{location.terrain}</td>
            </tr>
        
        ))}
        </>
    )
}

export default LocationItem
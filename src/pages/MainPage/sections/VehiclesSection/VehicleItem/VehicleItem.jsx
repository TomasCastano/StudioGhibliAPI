import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VehicleItem = () => {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/vehicles`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setVehicles(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    return (
        <>
        {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
                <td><Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link></td>
                <td>{vehicle.description}</td>
                <td>{vehicle.vehicle_class}</td>
            </tr>
        
        ))}
        </>
    )
}

export default VehicleItem
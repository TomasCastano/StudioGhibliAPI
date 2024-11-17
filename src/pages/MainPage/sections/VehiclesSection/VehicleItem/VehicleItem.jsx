import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const VehicleItem = () => {

    const { id } = useParams()

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

    const filteredVehicles = vehicles.filter((vehicle) =>
        vehicle.films.some((filmUrl) => filmUrl.includes(id))
    )

    return (
        <>
        {filteredVehicles.map(vehicle => (
            <tr key={vehicle.id}>
                <td>{vehicle.name}</td>
                <td>{vehicle.description}</td>
                <td>{vehicle.vehicle_class}</td>
            </tr>
        ))}
        </>
    )
}

export default VehicleItem
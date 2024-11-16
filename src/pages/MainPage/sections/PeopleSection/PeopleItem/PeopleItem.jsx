import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const PeopleItem = () => {

    const { id } = useParams()

    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/people`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPeople(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    const filteredPeople = people.filter((person) =>
        person.films.some((filmUrl) => filmUrl.includes(id))
    )

    return (
        <>
        {filteredPeople.map(person => (
            <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.age}</td>
            </tr>
        
        ))}
        </>
    )
}

export default PeopleItem
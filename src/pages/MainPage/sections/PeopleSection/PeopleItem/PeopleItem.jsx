import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PeopleItem = () => {

    const { id } = useParams()

    const [films, setFilms] = useState([])
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFilms(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/people`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setPeople(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    return (
        <>
        {people.map(person => (
            <tr key={person.id}>
                <td><Link to={`/people/${person.id}`}>{person.name}</Link></td>
                <td>{person.gender}</td>
                <td>{person.age}</td>
            </tr>
        
        ))}
        </>
    )
}

export default PeopleItem
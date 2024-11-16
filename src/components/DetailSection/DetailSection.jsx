import { useParams } from 'react-router-dom'
import './DetailSection.css'
import { useEffect, useState } from 'react'

const DetailSection = ({ children, section, name }) => {

    const { id } = useParams()

    const [film, setFilm] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setFilm(data)
            })
            .catch((error) => console.error('Error:', error))
    }, [])

    return (
        <section className={`detail-section ${section}`}>
            <h1>{`${name} de ${film.title}`}</h1>
            {children}
        </section>
    )
}

export default DetailSection
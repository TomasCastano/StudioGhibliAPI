import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FilmItem = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFilms(data)
            })
            .catch(error => console.error('Error:', error))
    }, [])

    return (
        <>
        {films.map(film => (
            <tr key={film.id}>
                <td><Link to={`/film/${film.id}`}>{film.title}</Link></td>
                <td>{film.description}</td>
                <td>{film.release_date}</td>
            </tr>
        
        ))}
        </>
    )
}

export default FilmItem
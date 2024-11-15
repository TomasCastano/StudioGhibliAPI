import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './FilmDetailsSection.css'
import OptionCard from './components/OptionCard/OptionCard'

const FilmDetailsSection = () => {

    const { id } = useParams()
    const [film, setFilm] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFilm(data)
                setIsLoading(false)
            })
    }, [id])

    return (
        <div className='film-details-section'>
            <div className="film-details">
                <h1 className='film-title'>{film.title}</h1>
                <h4 className='film-release-date'>{film.release_date}</h4>
                <div className='film-description'>
                    <p>{film.description}</p>
                </div>
            </div>
            <div className='detail-options'>
                <h3>Ver más Detalles</h3>
                <div className="details-grid">
                    <OptionCard title="Locations" />
                    <OptionCard title="People" />
                    <OptionCard title="Species" />
                    <OptionCard title="Vehicles" />
                </div>
            </div>
        </div>
    )
}

export default FilmDetailsSection
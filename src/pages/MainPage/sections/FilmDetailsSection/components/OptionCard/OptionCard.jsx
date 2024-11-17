import { Link, useParams } from 'react-router-dom'

import './OptionCard.css'

const OptionCard = ({ title }) => {

    const { id } = useParams()

    return (
        <div className="card text-center">
            <div className="card-body g-3">
                <h5 className="card-title">{title}</h5>
                <Link to={`/film/${id}/${title.toLowerCase()}`} className="btn btn-primary">Ver {title}</Link>
            </div>
        </div>
    )
}

export default OptionCard
import './OptionCard.css'

const OptionCard = ({ title }) => {
    return (
        <div className="card text-center">
            <div className="card-body g-3">
                <h5 className="card-title">{title}</h5>
                <a href="#" className="btn btn-primary">Ver {title}</a>
            </div>
        </div>
    )
}

export default OptionCard
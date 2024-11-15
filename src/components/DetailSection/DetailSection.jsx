import './DetailSection.css'

const DetailSection = ({ children, section, name }) => {
    return (
        <section className={`detail-section ${section}`}>
            <h1>{name}</h1>
            {children}
        </section>
    )
}

export default DetailSection
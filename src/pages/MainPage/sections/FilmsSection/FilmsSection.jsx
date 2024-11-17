import FilmsTable from './components/FilmsTable/FilmsTable'

import './FilmsSection.css'

const FilmsSection = () => {
    return (
        <section className='films-section'>
            <h1>Películas</h1>
            <FilmsTable />
        </section>
    )
}

export default FilmsSection
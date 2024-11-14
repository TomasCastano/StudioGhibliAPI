import FilmsTable from './components/FilmsTable/FilmsTable'

import './FilmsSection.css'

const FilmsSection = () => {
    return (
        <section className='films-section'>
            <h1>Título</h1>
            <FilmsTable />
        </section>
    )
}

export default FilmsSection
import FilmItem from '../FilmItem/FilmItem'

import './FilmsTable.css'

const FilmsTable = () => {
    return (
        <table className='films-table'>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Descripción</th>
                    <th>Fecha de Estreno</th>
                    <th>Portada</th>
                </tr>
            </thead>
            <tbody>
                <FilmItem/>
            </tbody>
        </table>
    )
}

export default FilmsTable
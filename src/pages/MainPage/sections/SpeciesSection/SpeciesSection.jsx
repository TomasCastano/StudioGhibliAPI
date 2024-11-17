import DetailSection from '../../../../components/DetailSection/DetailSection'
import SpecieItem from './SpecieItem/SpecieItem'

import React from 'react'

const SpeciesSection = () => {

    return (
        <DetailSection section='species-section' name='Especies'>
            <table className='films-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Clasificación</th>
                    </tr>
                </thead>
                <tbody>
                    <SpecieItem />
                </tbody>
            </table>
        </DetailSection>
    )
}

export default SpeciesSection
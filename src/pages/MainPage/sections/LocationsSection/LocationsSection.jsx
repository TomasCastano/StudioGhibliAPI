import DetailSection from '../../../../components/DetailSection/DetailSection'
import LocationItem from './LocationItem/LocationItem'

import React from 'react'

const LocationsSection = () => {

    return (
        <DetailSection section='locations-section' name='Lugares'>
            <table className='films-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Clima</th>
                        <th>Terreno</th>
                    </tr>
                </thead>
                <tbody>
                    <LocationItem/>
                </tbody>
            </table>
        </DetailSection>
    )
}

export default LocationsSection
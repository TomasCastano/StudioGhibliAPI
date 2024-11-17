import DetailSection from '../../../../components/DetailSection/DetailSection'

import React from 'react'
import VehicleItem from './VehicleItem/VehicleItem'

const VehiclesSection = () => {

    return (
        <DetailSection section='vehicles-section' name='Vehículos'>
            <table className='films-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Clase de Vehículo</th>
                    </tr>
                </thead>
                <tbody>
                    <VehicleItem />
                </tbody>
            </table>
        </DetailSection>
    )
}

export default VehiclesSection
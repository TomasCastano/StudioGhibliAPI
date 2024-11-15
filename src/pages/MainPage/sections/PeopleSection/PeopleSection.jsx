import { useParams } from 'react-router-dom'

import DetailSection from '../../../../components/DetailSection/DetailSection'
import PeopleItem from './PeopleItem/PeopleItem'

import React from 'react'

const PeopleSection = () => {

    const { id } = useParams()

    return (
        <DetailSection section='people-section' name='Personas'>
            <table className='films-table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Género</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    <PeopleItem />
                </tbody>
            </table>
        </DetailSection>
    )
}

export default PeopleSection
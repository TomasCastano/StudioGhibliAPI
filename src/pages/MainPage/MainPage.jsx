import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from '../../components/Nav/Nav'
import FilmsSection from './sections/FilmsSection/FilmsSection'
import FilmDetailsSection from './sections/FilmDetailsSection/FilmDetailsSection'
import PeopleSection from './sections/PeopleSection/PeopleSection'
import VehiclesSection from './sections/VehiclesSection/VehiclesSection'
import LocationsSection from './sections/LocationsSection/LocationsSection'
import SpeciesSection from './sections/SpeciesSection/SpeciesSection'

import './MainPage.css'

const MainPage = () => {
    return (
        <>
        <main className="main-page">
            <Nav />
            <Router>
                <Routes>
                    <Route path="/" element={<FilmsSection />} />
                    <Route path="/film/:id" element={<FilmDetailsSection />} />
                    <Route path="/film/:id/locations" element={<LocationsSection />} />
                    <Route path="/film/:id/people" element={<PeopleSection />} />
                    <Route path="/film/:id/vehicles" element={<VehiclesSection />} />
                    <Route path="/film/:id/species" element={<SpeciesSection />} />
                </Routes>
            </Router>
        </main>
        </>
    )
}

export default MainPage
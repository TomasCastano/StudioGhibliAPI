import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import FilmsSection from './sections/FilmsSection/FilmsSection'
import FilmDetailsSection from './sections/FilmDetailsSection/FilmDetailsSection'

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
                    {/* <Route path='/characters/:id' Component={CharacterDetails}></Route> */}
                </Routes>
            </Router>
        </main>
        </>
    )
}

export default MainPage
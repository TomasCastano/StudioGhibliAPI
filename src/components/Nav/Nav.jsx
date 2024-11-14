import logo from '../../assets/images/logo.svg'

import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" width="150px" />
                </a>
            </div>
        </nav>
    )
}

export default Nav